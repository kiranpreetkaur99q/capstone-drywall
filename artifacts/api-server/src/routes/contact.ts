import { Router, type IRouter } from "express";
import { ReplitConnectors } from "@replit/connectors-sdk";
import { logger } from "../lib/logger";

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  const { name, email, phone, location, type, service, description } = req.body;

  if (!name || !email || !phone || !description) {
    res.status(400).json({ success: false, message: "Missing required fields." });
    return;
  }

  const serviceLabels: Record<string, string> = {
    installation: "Drywall Installation",
    taping: "Commercial Drywall Taping & Plastering",
    framing: "Metal Steel Stud Framing",
    tbar: "T-Bar & Acoustic Ceilings",
    "metal-ceiling": "Metal Ceiling Panels",
    specialty: "Specialty Ceilings & Soffit",
    insulation: "Insulation",
    other: "Other / Multiple",
  };

  const serviceLabel = serviceLabels[service] || service || "Not specified";
  const projectType = type === "commercial" ? "Commercial" : "Residential";

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #1e293b; padding: 24px 32px; border-radius: 8px 8px 0 0;">
        <h1 style="color: #ffffff; margin: 0; font-size: 22px;">New Quote Request</h1>
        <p style="color: #94a3b8; margin: 6px 0 0;">Capstone Drywall Website</p>
      </div>
      <div style="background: #f8fafc; padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; width: 40%; font-weight: bold; font-size: 14px;">Full Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 14px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-weight: bold; font-size: 14px;">Phone</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 14px;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-weight: bold; font-size: 14px;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 14px;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-weight: bold; font-size: 14px;">Project Location</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 14px;">${location || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-weight: bold; font-size: 14px;">Project Type</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 14px;">${projectType}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-weight: bold; font-size: 14px;">Service Needed</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 14px;">${serviceLabel}</td>
          </tr>
        </table>
        <div style="margin-top: 24px;">
          <p style="color: #64748b; font-weight: bold; font-size: 14px; margin-bottom: 8px;">Project Description</p>
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; color: #1e293b; font-size: 14px; line-height: 1.6;">
            ${description.replace(/\n/g, "<br>")}
          </div>
        </div>
        <div style="margin-top: 24px; padding: 16px; background: #fef2f2; border-radius: 6px; border-left: 4px solid #c9191a;">
          <p style="margin: 0; color: #7f1d1d; font-size: 13px;">Reply directly to this email to respond to the customer at <strong>${email}</strong></p>
        </div>
      </div>
    </div>
  `;

  try {
    const connectors = new ReplitConnectors();

    const response = await connectors.proxy("resend", "/emails", {
      method: "POST",
      body: JSON.stringify({
        from: "Capstone Drywall <onboarding@resend.dev>",
        to: ["info@capstonedrywall.ca"],
        reply_to: email,
        subject: `New Quote Request: ${serviceLabel} — ${name}`,
        html,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      logger.error({ status: response.status, error: errorText }, "Resend API error");
      res.status(500).json({ success: false, message: "Failed to send email. Please call us directly." });
      return;
    }

    logger.info({ name, email, service: serviceLabel }, "Quote request email sent");
    res.json({ success: true });
  } catch (err) {
    logger.error({ err }, "Contact form error");
    res.status(500).json({ success: false, message: "Something went wrong. Please try again or call us directly." });
  }
});

export default router;
