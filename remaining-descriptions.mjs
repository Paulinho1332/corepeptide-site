import { getDb } from './server/db.ts';
import { products } from './drizzle/schema.ts';
import { eq } from 'drizzle-orm';

const remainingDescriptions = {
  'Amylin (10mg)': `Amylin Peptide

Amylin is a synthetic peptide hormone that plays a role in glucose regulation and satiety. The peptide has been studied for its potential to support metabolic health and promote healthy glucose levels.

Research suggests that Amylin may support metabolic function and promote healthy glucose regulation.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Amylin is available for research and laboratory purposes only.`,

  'Angiotensin II (10mg)': `Angiotensin II Peptide

Angiotensin II is a synthetic peptide hormone that plays a role in blood pressure regulation and vascular function. The peptide has been studied for its potential to support cardiovascular health.

Research suggests that Angiotensin II may support vascular function and cardiovascular health.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Angiotensin II is available for research and laboratory purposes only.`,

  'Apelin (10mg)': `Apelin Peptide

Apelin is a synthetic peptide that plays a role in cardiovascular function and energy metabolism. The peptide has been studied for its potential to support cardiovascular health and metabolic function.

Research suggests that Apelin may support cardiovascular health and promote metabolic function.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Apelin is available for research and laboratory purposes only.`,

  'Atrial Natriuretic Peptide (ANP) (10mg)': `Atrial Natriuretic Peptide (ANP) Peptide

ANP is a synthetic peptide hormone that plays a role in blood pressure regulation and fluid balance. The peptide has been studied for its potential to support cardiovascular health and promote healthy blood pressure.

Research suggests that ANP may support cardiovascular health and promote healthy blood pressure regulation.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

ANP is available for research and laboratory purposes only.`,

  'BPC-157 Oral (500mg)': `BPC-157 Oral Peptide

BPC-157 Oral is an oral formulation of Body Protection Compound-157 designed to support gastrointestinal health and promote tissue repair. The peptide has been studied for its potential to enhance wound healing and support tissue regeneration.

Research suggests that BPC-157 Oral may support gastrointestinal health and promote tissue repair.

Chemical Specifications

Form: Oral formulation
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

BPC-157 Oral is available for research and laboratory purposes only.`,

  'Bradykinin (10mg)': `Bradykinin Peptide

Bradykinin is a synthetic peptide that plays a role in inflammation and pain signaling. The peptide has been studied for its potential to support inflammatory response and promote tissue health.

Research suggests that Bradykinin may support inflammatory response and promote tissue health.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Bradykinin is available for research and laboratory purposes only.`,

  'Calcitonin (200IU)': `Calcitonin Peptide

Calcitonin is a synthetic peptide hormone that plays a role in bone metabolism and calcium regulation. The peptide has been studied for its potential to support bone health and promote healthy calcium levels.

Research suggests that Calcitonin may support bone health and promote healthy calcium regulation.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Calcitonin is available for research and laboratory purposes only.`,

  'Cholecystokinin (CCK) (10mg)': `Cholecystokinin (CCK) Peptide

CCK is a synthetic peptide hormone that plays a role in digestion and satiety. The peptide has been studied for its potential to support digestive health and promote healthy appetite regulation.

Research suggests that CCK may support digestive health and promote healthy appetite regulation.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

CCK is available for research and laboratory purposes only.`,

  'Corticotropin-Releasing Hormone (CRH) (10mg)': `Corticotropin-Releasing Hormone (CRH) Peptide

CRH is a synthetic peptide that plays a role in stress response and hormone regulation. The peptide has been studied for its potential to support healthy stress response and promote hormonal balance.

Research suggests that CRH may support stress response and promote hormonal health.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

CRH is available for research and laboratory purposes only.`,

  'Dermorphin (5mg)': `Dermorphin Peptide

Dermorphin is a synthetic peptide derived from frog skin designed to support pain management and promote comfort. The peptide has been studied for its potential to support pain relief and promote well-being.

Research suggests that Dermorphin may support pain management and promote comfort.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Dermorphin is available for research and laboratory purposes only.`,

  'Endomorphin-1 (5mg)': `Endomorphin-1 Peptide

Endomorphin-1 is a synthetic peptide that plays a role in pain modulation and emotional well-being. The peptide has been studied for its potential to support pain relief and promote emotional health.

Research suggests that Endomorphin-1 may support pain management and promote emotional well-being.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Endomorphin-1 is available for research and laboratory purposes only.`,

  'Endomorphin-2 (5mg)': `Endomorphin-2 Peptide

Endomorphin-2 is a synthetic peptide that plays a role in pain modulation and emotional well-being. The peptide has been studied for its potential to support pain relief and promote emotional health.

Research suggests that Endomorphin-2 may support pain management and promote emotional well-being.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Endomorphin-2 is available for research and laboratory purposes only.`,

  'Enkephalin (5mg)': `Enkephalin Peptide

Enkephalin is a synthetic peptide that plays a role in pain modulation and mood regulation. The peptide has been studied for its potential to support pain relief and promote emotional well-being.

Research suggests that Enkephalin may support pain management and promote emotional health.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Enkephalin is available for research and laboratory purposes only.`,

  'Exenatide (5mg)': `Exenatide Peptide

Exenatide is a synthetic peptide that acts as a GLP-1 receptor agonist. The peptide has been studied for its potential to support healthy glucose levels and promote metabolic health.

Research suggests that Exenatide may support glucose regulation and promote metabolic function.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Exenatide is available for research and laboratory purposes only.`,

  'Fibronectin Fragment (10mg)': `Fibronectin Fragment Peptide

Fibronectin Fragment is a synthetic peptide derived from fibronectin designed to support cell adhesion and tissue repair. The peptide has been studied for its potential to promote wound healing and support tissue regeneration.

Research suggests that Fibronectin Fragment may support tissue repair and promote wound healing.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Fibronectin Fragment is available for research and laboratory purposes only.`,

  'Ghrelin (10mg)': `Ghrelin Peptide

Ghrelin is a synthetic peptide hormone that plays a role in appetite regulation and energy metabolism. The peptide has been studied for its potential to support healthy appetite and promote metabolic function.

Research suggests that Ghrelin may support appetite regulation and promote metabolic health.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Ghrelin is available for research and laboratory purposes only.`,

  'GLP-1 (Glucagon-Like Peptide-1) (10mg)': `GLP-1 (Glucagon-Like Peptide-1) Peptide

GLP-1 is a synthetic peptide hormone that plays a role in glucose regulation and appetite control. The peptide has been studied for its potential to support healthy glucose levels and promote metabolic health.

Research suggests that GLP-1 may support glucose regulation and promote metabolic function.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

GLP-1 is available for research and laboratory purposes only.`,

  'Glucagon (1mg)': `Glucagon Peptide

Glucagon is a synthetic peptide hormone that plays a role in blood glucose regulation. The peptide has been studied for its potential to support healthy glucose levels and promote metabolic health.

Research suggests that Glucagon may support glucose regulation and promote metabolic function.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Glucagon is available for research and laboratory purposes only.`,

  'Gonadotropin-Releasing Hormone (GnRH) (10mg)': `Gonadotropin-Releasing Hormone (GnRH) Peptide

GnRH is a synthetic peptide that stimulates the release of luteinizing hormone and follicle-stimulating hormone. The peptide has been studied for its potential to support reproductive health and promote hormonal balance.

Research suggests that GnRH may support reproductive hormone regulation and promote hormonal health.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

GnRH is available for research and laboratory purposes only.`,

  'Heparin-Binding EGF-Like Growth Factor (HB-EGF) (10mg)': `Heparin-Binding EGF-Like Growth Factor (HB-EGF) Peptide

HB-EGF is a synthetic peptide growth factor designed to support cell growth and tissue repair. The peptide has been studied for its potential to promote wound healing and support tissue regeneration.

Research suggests that HB-EGF may support tissue repair and promote wound healing.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

HB-EGF is available for research and laboratory purposes only.`,

  'IGF-1 (Insulin-Like Growth Factor-1) (100mcg)': `IGF-1 (Insulin-Like Growth Factor-1) Peptide

IGF-1 is a synthetic peptide growth factor designed to support muscle growth and tissue repair. The peptide has been extensively studied for its potential to promote muscle development and support tissue regeneration.

Research suggests that IGF-1 may support muscle growth and promote tissue repair.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

IGF-1 is available for research and laboratory purposes only.`,

  'IGF-1 DES (10mg)': `IGF-1 DES Peptide

IGF-1 DES is a synthetic peptide growth factor derived from IGF-1 designed to support muscle growth. The peptide has been studied for its potential to promote muscle development and support tissue repair.

Research suggests that IGF-1 DES may support muscle growth and promote tissue repair.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

IGF-1 DES is available for research and laboratory purposes only.`,

  'Insulin (100IU)': `Insulin Peptide

Insulin is a synthetic peptide hormone that plays a role in glucose regulation and metabolic health. The peptide has been studied for its potential to support healthy glucose levels and promote metabolic function.

Research suggests that Insulin may support glucose regulation and promote metabolic health.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Insulin is available for research and laboratory purposes only.`,

  'Leptin (10mg)': `Leptin Peptide

Leptin is a synthetic peptide hormone that plays a role in appetite regulation and energy metabolism. The peptide has been studied for its potential to support healthy appetite and promote metabolic function.

Research suggests that Leptin may support appetite regulation and promote metabolic health.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Leptin is available for research and laboratory purposes only.`,

  'Leu-Enkephalin (5mg)': `Leu-Enkephalin Peptide

Leu-Enkephalin is a synthetic peptide that plays a role in pain modulation and mood regulation. The peptide has been studied for its potential to support pain relief and promote emotional well-being.

Research suggests that Leu-Enkephalin may support pain management and promote emotional health.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Leu-Enkephalin is available for research and laboratory purposes only.`,

  'Liraglutide (1mg)': `Liraglutide Peptide

Liraglutide is a synthetic peptide that acts as a GLP-1 receptor agonist. The peptide has been studied for its potential to support healthy glucose levels and promote metabolic health.

Research suggests that Liraglutide may support glucose regulation and promote metabolic function.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Liraglutide is available for research and laboratory purposes only.`,

  'Lipotropin (10mg)': `Lipotropin Peptide

Lipotropin is a synthetic peptide that plays a role in fat metabolism and energy regulation. The peptide has been studied for its potential to support metabolic health and promote fat loss.

Research suggests that Lipotropin may support metabolic function and promote healthy body composition.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Lipotropin is available for research and laboratory purposes only.`,

  'Luteinizing Hormone (LH) (10mg)': `Luteinizing Hormone (LH) Peptide

LH is a synthetic peptide hormone that plays a role in reproductive health and hormone regulation. The peptide has been studied for its potential to support reproductive health and promote hormonal balance.

Research suggests that LH may support reproductive hormone regulation and promote hormonal health.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

LH is available for research and laboratory purposes only.`,

  'Neuromedin B (10mg)': `Neuromedin B Peptide

Neuromedin B is a synthetic peptide that plays a role in appetite regulation and energy metabolism. The peptide has been studied for its potential to support healthy appetite and promote metabolic function.

Research suggests that Neuromedin B may support appetite regulation and promote metabolic health.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Neuromedin B is available for research and laboratory purposes only.`,

  'Neurotensin (10mg)': `Neurotensin Peptide

Neurotensin is a synthetic peptide that plays a role in appetite regulation and pain modulation. The peptide has been studied for its potential to support healthy appetite and promote pain relief.

Research suggests that Neurotensin may support appetite regulation and promote pain management.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Neurotensin is available for research and laboratory purposes only.`,

  'Neuropeptide Y (NPY) (10mg)': `Neuropeptide Y (NPY) Peptide

NPY is a synthetic peptide that plays a role in appetite regulation and stress response. The peptide has been studied for its potential to support healthy appetite and promote emotional well-being.

Research suggests that NPY may support appetite regulation and promote emotional health.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

NPY is available for research and laboratory purposes only.`,

  'Pancreatic Polypeptide (PP) (10mg)': `Pancreatic Polypeptide (PP) Peptide

PP is a synthetic peptide hormone that plays a role in appetite regulation and digestion. The peptide has been studied for its potential to support healthy appetite and promote digestive health.

Research suggests that PP may support appetite regulation and promote digestive function.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

PP is available for research and laboratory purposes only.`,

  'Peptide YY (PYY) (10mg)': `Peptide YY (PYY) Peptide

PYY is a synthetic peptide hormone that plays a role in appetite regulation and satiety. The peptide has been studied for its potential to support healthy appetite and promote metabolic health.

Research suggests that PYY may support appetite regulation and promote metabolic function.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

PYY is available for research and laboratory purposes only.`,

  'Prolactin (10mg)': `Prolactin Peptide

Prolactin is a synthetic peptide hormone that plays a role in reproductive health and lactation. The peptide has been studied for its potential to support reproductive health and promote hormonal balance.

Research suggests that Prolactin may support reproductive hormone regulation and promote hormonal health.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Prolactin is available for research and laboratory purposes only.`,

  'Secretin (10mg)': `Secretin Peptide

Secretin is a synthetic peptide hormone that plays a role in digestion and pH regulation. The peptide has been studied for its potential to support digestive health and promote healthy pH balance.

Research suggests that Secretin may support digestive function and promote healthy pH regulation.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Secretin is available for research and laboratory purposes only.`,

  'Somatostatin (10mg)': `Somatostatin Peptide

Somatostatin is a synthetic peptide hormone that plays a role in hormone regulation and appetite control. The peptide has been studied for its potential to support healthy hormone levels and promote metabolic health.

Research suggests that Somatostatin may support hormone regulation and promote metabolic function.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Somatostatin is available for research and laboratory purposes only.`,

  'Somatotropin (Growth Hormone) (10IU)': `Somatotropin (Growth Hormone) Peptide

Somatotropin, also known as Growth Hormone, is a synthetic peptide hormone that plays a role in growth and metabolism. The peptide has been studied for its potential to support muscle growth and promote metabolic health.

Research suggests that Somatotropin may support growth and promote metabolic function.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Somatotropin is available for research and laboratory purposes only.`,

  'Substance P (10mg)': `Substance P Peptide

Substance P is a synthetic peptide that plays a role in pain signaling and immune regulation. The peptide has been studied for its potential to support pain management and promote immune health.

Research suggests that Substance P may support pain management and promote immune function.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Substance P is available for research and laboratory purposes only.`,

  'Thymopentin (5mg)': `Thymopentin Peptide

Thymopentin is a synthetic pentapeptide derived from thymosin designed to support immune function. The peptide has been studied for its potential to enhance immune health and support immune cell function.

Research suggests that Thymopentin may enhance immune function and support immune health.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Thymopentin is available for research and laboratory purposes only.`,

  'Thyroid-Stimulating Hormone (TSH) (10mg)': `Thyroid-Stimulating Hormone (TSH) Peptide

TSH is a synthetic peptide hormone that plays a role in thyroid function and metabolism. The peptide has been studied for its potential to support thyroid health and promote metabolic function.

Research suggests that TSH may support thyroid function and promote metabolic health.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

TSH is available for research and laboratory purposes only.`,

  'Vasopressin (10mg)': `Vasopressin Peptide

Vasopressin is a synthetic peptide hormone that plays a role in fluid balance and blood pressure regulation. The peptide has been studied for its potential to support cardiovascular health and promote healthy fluid balance.

Research suggests that Vasopressin may support cardiovascular health and promote fluid balance.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Vasopressin is available for research and laboratory purposes only.`,

  'VIP (Vasoactive Intestinal Peptide) (10mg)': `VIP (Vasoactive Intestinal Peptide) Peptide

VIP is a synthetic peptide that plays a role in vasodilation, immune regulation, and neurotransmission. The peptide has been studied for its potential to support vascular health and immune function.

Research suggests that VIP may support vascular health and promote immune function.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

VIP is available for research and laboratory purposes only.`,
};

async function updateDescriptions() {
  const db = await getDb();
  if (!db) {
    console.error('Database not available');
    process.exit(1);
  }

  let updated = 0;
  for (const [name, description] of Object.entries(remainingDescriptions)) {
    try {
      await db.update(products)
        .set({ description })
        .where(eq(products.name, name));
      updated++;
      console.log(`Updated: ${name}`);
    } catch (error) {
      console.error(`Failed to update ${name}:`, error);
    }
  }

  console.log(`\nTotal updated: ${updated}/${Object.keys(remainingDescriptions).length}`);
  process.exit(0);
}

updateDescriptions();
