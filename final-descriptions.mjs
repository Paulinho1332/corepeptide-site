import { getDb } from './server/db.ts';
import { products } from './drizzle/schema.ts';
import { eq } from 'drizzle-orm';

const finalDescriptions = {
  'AHK-Cu (200mg)': `AHK-Cu Peptide

AHK-Cu is a tripeptide copper complex consisting of the amino acid sequence Ala-His-Lys complexed with copper. This peptide is researched for its potential to promote skin health, wound healing, and collagen synthesis.

The copper complex is believed to enhance collagen synthesis and improve skin elasticity. AHK-Cu has been extensively studied for its potential cosmetic and therapeutic applications.

Research Applications

AHK-Cu and Collagen Synthesis

Research suggests that AHK-Cu may promote collagen synthesis and support skin health. Studies have shown that the peptide may enhance the production of collagen and other extracellular matrix components.

AHK-Cu and Wound Healing

The peptide has been studied for its potential to accelerate wound healing and promote tissue regeneration. Research indicates that AHK-Cu may support the healing of various types of wounds and skin injuries.

AHK-Cu and Skin Health

AHK-Cu is widely used in skincare formulations for its potential to improve skin appearance and promote skin health. Research suggests that the peptide may enhance skin elasticity and reduce the appearance of wrinkles.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

AHK-Cu is available for research and laboratory purposes only.`,

  'Alarin (10mg)': `Alarin Peptide

Alarin is a synthetic peptide derived from galanin-like peptide designed to support cellular health and promote metabolic function. The peptide has been studied for its potential to enhance energy metabolism and support overall health.

Research suggests that Alarin may support metabolic health and promote cellular function.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Alarin is available for research and laboratory purposes only.`,

  'Angiotensin 1-7 (10mg)': `Angiotensin 1-7 Peptide

Angiotensin 1-7 is a synthetic peptide hormone that plays a role in blood pressure regulation and cardiovascular function. The peptide has been studied for its potential to support cardiovascular health and promote healthy blood pressure.

Research suggests that Angiotensin 1-7 may support cardiovascular health and promote healthy blood pressure regulation.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Angiotensin 1-7 is available for research and laboratory purposes only.`,

  'Arginine Vasopressin (AVP) (10mg)': `Arginine Vasopressin (AVP) Peptide

AVP is a synthetic peptide hormone that plays a role in fluid balance and blood pressure regulation. The peptide has been studied for its potential to support cardiovascular health and promote healthy fluid balance.

Research suggests that AVP may support cardiovascular health and promote fluid balance.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

AVP is available for research and laboratory purposes only.`,

  'Aurein 1.2 (10mg)': `Aurein 1.2 Peptide

Aurein 1.2 is a synthetic peptide derived from frog skin designed to support immune function and promote antimicrobial activity. The peptide has been studied for its potential to enhance immune health.

Research suggests that Aurein 1.2 may support immune function and promote immune health.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Aurein 1.2 is available for research and laboratory purposes only.`,

  'Bioactive Collagen Peptides (500mg)': `Bioactive Collagen Peptides

Bioactive Collagen Peptides are synthetic peptides derived from collagen designed to support skin health, joint health, and connective tissue integrity. These peptides have been studied for their potential to promote collagen synthesis and support tissue health.

Research suggests that Bioactive Collagen Peptides may support skin health and promote connective tissue health.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Bioactive Collagen Peptides are available for research and laboratory purposes only.`,

  'C-peptide (10mg)': `C-peptide Peptide

C-peptide is a synthetic peptide that plays a role in glucose regulation and metabolic health. The peptide has been studied for its potential to support healthy glucose levels and promote metabolic function.

Research suggests that C-peptide may support glucose regulation and promote metabolic health.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

C-peptide is available for research and laboratory purposes only.`,

  'Capromorelin (10mg)': `Capromorelin Peptide

Capromorelin is a synthetic peptide that acts as a growth hormone secretagogue. The peptide has been studied for its potential to enhance growth hormone secretion and support metabolic health.

Research suggests that Capromorelin may enhance growth hormone levels and support metabolic function.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Capromorelin is available for research and laboratory purposes only.`,

  'Cerebrolysin (10mg)': `Cerebrolysin Peptide

Cerebrolysin is a synthetic peptide derived from porcine brain designed to support cognitive function and promote neuroprotection. The peptide has been studied for its potential to enhance brain health and support mental clarity.

Research suggests that Cerebrolysin may support cognitive function and promote neuroprotection.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Cerebrolysin is available for research and laboratory purposes only.`,

  'Collagen Tripeptide (GPH) (500mg)': `Collagen Tripeptide (GPH) Peptide

Collagen Tripeptide is a synthetic peptide derived from collagen designed to support skin health and promote collagen synthesis. The peptide has been studied for its potential to enhance skin appearance and support skin elasticity.

Research suggests that Collagen Tripeptide may support skin health and promote collagen synthesis.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Collagen Tripeptide is available for research and laboratory purposes only.`,

  'Cosmetic Peptide Complex (200mg)': `Cosmetic Peptide Complex

Cosmetic Peptide Complex is a synthetic peptide blend designed to support skin health and promote anti-aging effects. The peptide complex has been studied for its potential to enhance skin appearance and support skin elasticity.

Research suggests that Cosmetic Peptide Complex may support skin health and promote anti-aging effects.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Cosmetic Peptide Complex is available for research and laboratory purposes only.`,

  'Decapeptide-2 (200mg)': `Decapeptide-2 Peptide

Decapeptide-2 is a synthetic peptide designed to support skin health and promote anti-aging effects. The peptide has been studied for its potential to enhance skin appearance and support skin elasticity.

Research suggests that Decapeptide-2 may support skin health and reduce the appearance of wrinkles.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Decapeptide-2 is available for research and laboratory purposes only.`,

  'Desmopressin (10mg)': `Desmopressin Peptide

Desmopressin is a synthetic peptide hormone that plays a role in fluid balance and blood pressure regulation. The peptide has been studied for its potential to support cardiovascular health and promote healthy fluid balance.

Research suggests that Desmopressin may support cardiovascular health and promote fluid balance.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Desmopressin is available for research and laboratory purposes only.`,

  'Dipeptide Diaminobutyroyl Benzylamide Diacetate (Matrixyl 3000) (200mg)': `Dipeptide Diaminobutyroyl Benzylamide Diacetate (Matrixyl 3000) Peptide

Matrixyl 3000 is a synthetic peptide designed to support collagen synthesis and promote skin health. The peptide has been studied for its potential to enhance skin appearance and support skin elasticity.

Research suggests that Matrixyl 3000 may support collagen synthesis and promote skin health.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Matrixyl 3000 is available for research and laboratory purposes only.`,

  'Eptifibatide (10mg)': `Eptifibatide Peptide

Eptifibatide is a synthetic peptide that plays a role in platelet aggregation and cardiovascular function. The peptide has been studied for its potential to support cardiovascular health.

Research suggests that Eptifibatide may support cardiovascular health and promote healthy platelet function.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Eptifibatide is available for research and laboratory purposes only.`,

  'Estrogen Receptor Modulator Peptide (10mg)': `Estrogen Receptor Modulator Peptide

Estrogen Receptor Modulator Peptide is a synthetic peptide designed to support hormonal health and promote hormonal balance. The peptide has been studied for its potential to support reproductive health.

Research suggests that Estrogen Receptor Modulator Peptide may support hormonal health and promote hormonal balance.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Estrogen Receptor Modulator Peptide is available for research and laboratory purposes only.`,

  'Fatty Acid Binding Protein (FABP) (10mg)': `Fatty Acid Binding Protein (FABP) Peptide

FABP is a synthetic peptide that plays a role in fatty acid metabolism and energy regulation. The peptide has been studied for its potential to support metabolic health and promote fat metabolism.

Research suggests that FABP may support metabolic health and promote healthy fat metabolism.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

FABP is available for research and laboratory purposes only.`,

  'Fibroin Peptide (200mg)': `Fibroin Peptide

Fibroin Peptide is a synthetic peptide derived from silk fibroin designed to support skin health and promote collagen synthesis. The peptide has been studied for its potential to enhance skin appearance and support skin elasticity.

Research suggests that Fibroin Peptide may support skin health and promote collagen synthesis.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Fibroin Peptide is available for research and laboratory purposes only.`,

  'Fluorescent Peptide (10mg)': `Fluorescent Peptide

Fluorescent Peptide is a synthetic peptide designed for research and laboratory applications. The peptide has been studied for its potential to support cellular research and visualization.

Research suggests that Fluorescent Peptide may support research applications and cellular visualization.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Fluorescent Peptide is available for research and laboratory purposes only.`,

  'Galanin (10mg)': `Galanin Peptide

Galanin is a synthetic peptide that plays a role in appetite regulation and pain modulation. The peptide has been studied for its potential to support healthy appetite and promote pain relief.

Research suggests that Galanin may support appetite regulation and promote pain management.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Galanin is available for research and laboratory purposes only.`,

  'Gly-Pro-Glu (200mg)': `Gly-Pro-Glu Peptide

Gly-Pro-Glu is a synthetic tripeptide designed to support skin health and promote collagen synthesis. The peptide has been studied for its potential to enhance skin appearance and support skin elasticity.

Research suggests that Gly-Pro-Glu may support skin health and promote collagen synthesis.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Gly-Pro-Glu is available for research and laboratory purposes only.`,

  'Goserelin (3.6mg)': `Goserelin Peptide

Goserelin is a synthetic peptide that acts as a gonadotropin-releasing hormone agonist. The peptide has been studied for its potential to support reproductive hormone regulation and promote hormonal health.

Research suggests that Goserelin may support reproductive hormone regulation and promote hormonal health.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Goserelin is available for research and laboratory purposes only.`,
};

async function updateDescriptions() {
  const db = await getDb();
  if (!db) {
    console.error('Database not available');
    process.exit(1);
  }

  let updated = 0;
  for (const [name, description] of Object.entries(finalDescriptions)) {
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

  console.log(`\nTotal updated: ${updated}/${Object.keys(finalDescriptions).length}`);
  process.exit(0);
}

updateDescriptions();
