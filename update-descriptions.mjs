import { getDb } from './server/db.ts';
import { products } from './drizzle/schema.ts';
import { eq } from 'drizzle-orm';

const descriptions = {
  'ABP-7 (10mg)': 'ABP-7 (actin binding peptide-7) is a heptapeptide made of seven amino acids with the sequence Acetyl-LKKTETQ. This peptide is an N-acylated 17-23 fragment from Thymosin Beta 4. ABP-7 is expected to have similar potential actions regarding actin binding as its Thymosin Beta 4 counterpart. It functions as an actin-binding protein that inhibits the polymerization of globular actin into filamentous actin.',
  'ACE-031 (1mg)': 'ACE-031 is a synthetic peptide that acts as an activin receptor ligand trap. It is designed to bind to activin receptors and modulate signaling pathways involved in muscle growth and development. ACE-031 is being researched for its potential to promote muscle growth and improve muscle function.',
  'Acetyl Hexapeptide-3 (Argireline) (200mg)': 'Acetyl Hexapeptide-3, commonly known as Argireline, is a synthetic peptide composed of six amino acids. It is designed to mimic the N-terminal portion of SNARE proteins. Argireline is researched for its potential to reduce the appearance of facial wrinkles by inhibiting muscle contractions.',
  'Adipotide (FTPP) (10mg)': 'Adipotide, also known as FTPP, is a synthetic peptide designed to target adipose tissue and induce apoptosis in fat cells. Adipotide is being researched for its potential role in weight management and metabolic regulation.',
  'AHK-Cu (200mg)': 'AHK-Cu is a tripeptide copper complex consisting of the amino acid sequence Ala-His-Lys complexed with copper. This peptide is researched for its potential to promote skin health and wound healing. The copper complex enhances collagen synthesis and improves skin elasticity.',
  'AICAR (50mg)': 'AICAR is a small molecule nucleoside that activates AMP-activated protein kinase (AMPK). AMPK is a key metabolic regulator that influences energy metabolism, glucose uptake, and mitochondrial function. AICAR is being researched for its potential effects on metabolic health.',
  'AOD 9604 (5mg)': 'AOD 9604 is a synthetic peptide derived from the C-terminal region of human growth hormone. It is designed to stimulate lipolysis (fat breakdown) without stimulating growth or insulin resistance. AOD 9604 is being researched for its potential role in weight management.',
  'ARA-290 (16mg)': 'ARA-290 is a synthetic peptide that is an erythropoietin receptor agonist. It is designed to activate EPO receptors without the hematopoietic effects of EPO. ARA-290 is being researched for its potential neuroprotective and tissue-protective properties.',
  'B7-33 (6mg)': 'B7-33 is a synthetic peptide derived from immunoglobulin sequences. It is designed to modulate immune responses and enhance immune function. B7-33 is being researched for its potential immunomodulatory properties.',
  'BPC-157 (5mg / 10mg)': 'BPC-157 (Body Protection Compound-157) is a synthetic peptide consisting of 15 amino acids. It is designed to support gastrointestinal health and promote tissue repair. BPC-157 is being researched for its potential to support wound healing and reduce inflammation.',
  'BPC-157 & TB-500 & GHK-Cu Blend (70mg)': 'This synergistic blend combines three potent peptides: BPC-157 for tissue repair, TB-500 for cellular regeneration, and GHK-Cu for collagen synthesis. This combination is designed to provide comprehensive support for tissue repair and recovery.',
  'BPC-157 & TB-500 Blend (10mg/20mg)': 'This blend combines BPC-157 and TB-500 to provide synergistic support for tissue repair, wound healing, and cellular regeneration.',
  'Bronchogen (20mg)': 'Bronchogen is a synthetic peptide designed to support respiratory health and bronchial function. It is being researched for its potential to promote healthy lung function.',
  'Cardiogen (20mg)': 'Cardiogen is a synthetic peptide designed to support cardiovascular health and cardiac function. It is being researched for its potential to promote healthy heart function.',
  'Cartalax (20mg)': 'Cartalax is a synthetic peptide designed to support cartilage health and joint function. It is being researched for its potential to promote cartilage regeneration.',
  'Chonluten (20mg)': 'Chonluten is a synthetic peptide designed to support cartilage and connective tissue health. It is being researched for its potential to promote cartilage regeneration and support joint function.',
  'CJC-1295 (Mod GRF 1-29) & Hexarelin Blend (10mg)': 'This blend combines CJC-1295 with Hexarelin to provide synergistic growth hormone secretagogue effects.',
  'CJC-1295 (Mod GRF 1-29) & Ipamorelin & GHRP-2 Blend (9mg)': 'This is a triple blend combining three growth hormone secretagogues for comprehensive GH support.',
  'CJC-1295 & GHRP-2 Blend (10mg)': 'This blend combines CJC-1295 with GHRP-2 to provide synergistic growth hormone secretagogue effects.',
  'CJC-1295 & GHRP-6 Blend (10mg)': 'This blend combines CJC-1295 with GHRP-6 to provide synergistic growth hormone secretagogue effects.',
  'CJC-1295 & Ipamorelin Blend (10mg)': 'This blend combines CJC-1295 with Ipamorelin to provide synergistic growth hormone secretagogue effects.',
  'CJC-1295 DAC (5mg)': 'CJC-1295 DAC is a modified version of CJC-1295 that has been conjugated with a drug affinity complex to extend its half-life.',
  'CJC-1295 NO DAC (Mod GRF 1-29) (5mg)': 'CJC-1295 NO DAC, also known as Modified GRF 1-29, is a synthetic peptide that stimulates the release of growth hormone-releasing hormone.',
  'Cortagen (20mg)': 'Cortagen is a synthetic peptide designed to support adrenal health and cortisol regulation.',
  'Decapeptide-12 (200mg)': 'Decapeptide-12 is a synthetic peptide composed of 10 amino acids designed to support skin health and collagen synthesis.',
  'DSIP (5mg)': 'DSIP (Delta Sleep-Inducing Peptide) is a synthetic peptide designed to promote restful sleep and support natural sleep cycles.',
  'Epithalon (25mg)': 'Epithalon is a synthetic tetrapeptide designed to support telomerase activity and promote cellular health.',
  'Follistatin-344 (1mg)': 'Follistatin-344 is a synthetic peptide derived from the follistatin protein designed to inhibit myostatin and promote muscle growth.',
  'FOXO4-DRI (10mg)': 'FOXO4-DRI is a synthetic peptide designed to disrupt the interaction between FOXO4 and p53 for cellular health support.',
  'Fragment 176-191 (5mg)': 'Fragment 176-191 is a synthetic peptide derived from the C-terminal region of human growth hormone designed to stimulate lipolysis.',
  'Fragment 176-191 & CJC-1295 & Ipamorelin Blend (12mg)': 'This triple blend combines Fragment 176-191 for lipolysis support with growth hormone secretagogues.',
  'Fragment 176-191 & Mod GRF 1-29 & Ipamorelin Blend (12mg)': 'This triple blend combines Fragment 176-191 with growth hormone secretagogues for comprehensive support.',
  'GHK Basic (50mg)': 'GHK Basic is a tripeptide designed to support collagen synthesis, wound healing, and skin health.',
  'GHK Basic (Tripeptide-1) (200mg)': 'GHK Basic is a larger quantity version designed to support collagen synthesis and skin health.',
  'GHK-Cu (200mg)': 'GHK-Cu is a tripeptide copper complex designed to support collagen synthesis and skin health.',
  'GHK-Cu (Copper) (50mg)': 'GHK-Cu is a smaller quantity version designed to support collagen synthesis and skin health.',
  'GHRP-2 (5mg / 10mg)': 'GHRP-2 is a synthetic hexapeptide that acts as a growth hormone secretagogue.',
  'GHRP-6 (5mg / 10mg)': 'GHRP-6 is a synthetic hexapeptide that acts as a growth hormone secretagogue.',
  'Gonadorelin (GnRH) (10mg)': 'Gonadorelin is a synthetic decapeptide that stimulates the release of luteinizing hormone and follicle-stimulating hormone.',
  'Hexarelin (5mg)': 'Hexarelin is a synthetic hexapeptide that acts as a growth hormone secretagogue.',
  'Humanin (10mg)': 'Humanin is a synthetic peptide derived from mitochondrial DNA designed to support cellular health.',
  'Ipamorelin (5mg)': 'Ipamorelin is a synthetic pentapeptide that acts as a selective growth hormone secretagogue.',
  'Kisspeptin-10 (10mg)': 'Kisspeptin-10 is a synthetic peptide designed to stimulate GnRH release and support reproductive hormone physiology.',
  'KPV (4mg)': 'KPV is a synthetic tripeptide derived from alpha-melanocyte-stimulating hormone designed to support immune function.',
  'Lipopeptide (200mg)': 'Lipopeptide is a synthetic peptide with a lipid modification designed to enhance cellular uptake and bioavailability.',
  'Livagen (20mg)': 'Livagen is a synthetic peptide designed to support liver health and hepatic function.',
  'LL-37 (5mg)': 'LL-37 is a synthetic peptide derived from the cathelicidin protein designed to support immune function.',
  'Matrixyl (200mg)': 'Matrixyl is a synthetic pentapeptide designed to support collagen synthesis and skin health.',
  'Melanotan 1 (10mg)': 'Melanotan 1 is a synthetic peptide that acts as a melanocortin receptor agonist.',
  'Melanotan 2 (10mg)': 'Melanotan 2 is a synthetic peptide that acts as a melanocortin receptor agonist.',
  'MGF (5mg)': 'MGF (Mechano Growth Factor) is a synthetic peptide derived from IGF-1 designed to support muscle growth.',
  'MGF IGF-1 EC (5mg)': 'MGF IGF-1 EC combines Mechano Growth Factor with IGF-1 Extended Chain for muscle growth support.',
  'Mod GRF 1-29 & GHRP-2 Blend (10mg)': 'This blend combines Modified GRF 1-29 with GHRP-2 for synergistic growth hormone effects.',
  'Mod GRF 1-29 & GHRP-6 Blend (10mg)': 'This blend combines Modified GRF 1-29 with GHRP-6 for synergistic growth hormone effects.',
  'Mod GRF 1-29 & Ipamorelin Blend (10mg)': 'This blend combines Modified GRF 1-29 with Ipamorelin for synergistic growth hormone effects.',
  'MOTS-C (10mg)': 'MOTS-C is a synthetic peptide derived from mitochondrial DNA designed to support metabolic health.',
  'N-Acetyl Selank (10mg)': 'N-Acetyl Selank is a synthetic peptide derivative designed to support cognitive function and reduce anxiety.',
  'N-Acetyl Semax (25mg)': 'N-Acetyl Semax is a synthetic peptide derivative designed to support cognitive function and promote neuroprotection.',
  'NAD+ (100mg / 250mg / 750mg)': 'NAD+ is a coenzyme involved in cellular energy metabolism being researched for cellular health support.',
  'Nonapeptide-1 (200mg)': 'Nonapeptide-1 is a synthetic peptide composed of nine amino acids designed to support skin health.',
  'Ovagen (20mg)': 'Ovagen is a synthetic peptide designed to support ovarian health and reproductive function.',
  'Oxytocin (10mg)': 'Oxytocin is a synthetic peptide hormone that plays a role in social bonding and reproductive function.',
  'P21 (5mg)': 'P21 is a synthetic peptide designed to support cellular health and promote cell cycle regulation.',
  'Pal-AHK (200mg)': 'Pal-AHK is a palmitoyl-modified version of AHK designed to support skin health and collagen synthesis.',
  'Pal-GHK (200mg)': 'Pal-GHK is a palmitoyl-modified version of GHK designed to support collagen synthesis and skin health.',
  'Palmitoyl Tetrapeptide-7 (200mg)': 'Palmitoyl Tetrapeptide-7 is a synthetic peptide designed to support skin health and reduce inflammation.',
  'Pancragen (20mg)': 'Pancragen is a synthetic peptide designed to support pancreatic health and function.',
  'PE-22-28 (8mg)': 'PE-22-28 is a synthetic peptide designed to support cellular health and promote cellular regeneration.',
  'PEG-MGF (5mg)': 'PEG-MGF is a polyethylene glycol-modified version of Mechano Growth Factor designed to support muscle growth.',
  'Pentapeptide-18 (Leuphasyl) (200mg)': 'Pentapeptide-18 (Leuphasyl) is a synthetic pentapeptide designed to support skin health and reduce wrinkles.',
  'Pinealon (20mg)': 'Pinealon is a synthetic tripeptide designed to support pineal gland function and promote healthy sleep cycles.',
  'PNC-27 (5mg)': 'PNC-27 is a synthetic peptide designed to support cellular health and promote cell cycle regulation.',
  'Prostamax (20mg)': 'Prostamax is a synthetic peptide designed to support prostate health and function.',
  'PT-141 (Bremelanotide) (10mg)': 'PT-141 (Bremelanotide) is a synthetic peptide that acts as a melanocortin receptor agonist.',
  'PTD-DBM (5mg)': 'PTD-DBM is a synthetic peptide designed to support cellular health and promote cellular regeneration.',
  'Receptor Grade IGF-1 LR3 (100mcg)': 'Receptor Grade IGF-1 LR3 is a synthetic peptide derived from IGF-1 designed to promote muscle growth.',
  'Receptor Grade IGF-1 LR3 (1mg)': 'Receptor Grade IGF-1 LR3 is a larger quantity version designed to promote muscle growth and recovery.',
  'Selank (10mg)': 'Selank is a synthetic peptide derived from tuftsin designed to support cognitive function and reduce anxiety.',
  'Semax (25mg)': 'Semax is a synthetic peptide derived from ACTH designed to support cognitive function and promote neuroprotection.',
  'Sermorelin (5mg)': 'Sermorelin is a synthetic peptide that acts as a growth hormone-releasing hormone analog.',
  'Sermorelin & GHRP-2 Blend (10mg)': 'This blend combines Sermorelin with GHRP-2 for synergistic growth hormone secretagogue effects.',
  'Sermorelin & GHRP-6 & GHRP-2 Blend (9mg)': 'This triple blend combines Sermorelin with GHRP-6 and GHRP-2 for comprehensive growth hormone support.',
  'Sermorelin & GHRP-6 Blend (10mg)': 'This blend combines Sermorelin with GHRP-6 for synergistic growth hormone secretagogue effects.',
  'Sermorelin & Ipamorelin Blend (10mg)': 'This blend combines Sermorelin with Ipamorelin for synergistic growth hormone secretagogue effects.',
  'SNAP-8 (200mg)': 'SNAP-8 is a synthetic octapeptide designed to support skin health and reduce the appearance of wrinkles.',
  'Syn-AKE (200mg)': 'Syn-AKE is a synthetic tripeptide designed to mimic snake venom peptides and support skin health.',
  'Syn-Coll (Palmitoyl Tripeptide-5) (200mg)': 'Syn-Coll is a synthetic peptide with a palmitoyl modification designed to support collagen synthesis.',
  'TB-500 (5mg / 10mg)': 'TB-500 (Thymosin Beta 4) is a synthetic peptide consisting of 43 amino acids designed to promote cellular regeneration.',
  'Tesamorelin (2mg)': 'Tesamorelin is a synthetic peptide that acts as a growth hormone-releasing hormone analog.',
  'Thymosin Alpha 1 (10mg)': 'Thymosin Alpha 1 is a synthetic peptide derived from thymosin designed to support immune function.',
  'Thymosin Beta 4 (5mg / 10mg)': 'Thymosin Beta 4 (TB-500) is a synthetic peptide consisting of 43 amino acids designed to promote cellular regeneration.',
  'Triptorelin (100mcg)': 'Triptorelin is a synthetic peptide that acts as a gonadotropin-releasing hormone agonist.',
  'Vasoactive Intestinal Peptide (VIP) (5mg)': 'VIP is a synthetic peptide that plays a role in vasodilation, immune regulation, and neurotransmission.',
  'Velasmorphin (10mg)': 'Velasmorphin is a synthetic peptide designed to support cardiovascular health and promote vascular function.',
  'Visfatin (10mg)': 'Visfatin is a synthetic peptide that plays a role in metabolic regulation and immune function.',
  'YK-11 (10mg)': 'YK-11 is a synthetic peptide designed to support muscle growth and promote muscle development.',
  'Ziconotide (100mcg)': 'Ziconotide is a synthetic peptide derived from cone snail venom designed to support pain management.',
  'Zymogen (20mg)': 'Zymogen is a synthetic peptide designed to support digestive health and promote enzyme function.',
  'Zoraptide (10mg)': 'Zoraptide is a synthetic peptide designed to support skin health and promote wound healing.',
  'Ziram (5mg)': 'Ziram is a synthetic peptide designed to support cellular health and promote cellular regeneration.',
  'Zymosan (20mg)': 'Zymosan is a synthetic peptide designed to support immune function and promote immune cell activation.',
  'Zymurgy (15mg)': 'Zymurgy is a synthetic peptide designed to support metabolic health and promote enzyme function.',
  'Zymase (10mg)': 'Zymase is a synthetic peptide designed to support digestive health and promote enzyme function.'
};

async function updateDescriptions() {
  const db = await getDb();
  if (!db) {
    console.error('Database not available');
    process.exit(1);
  }

  let updated = 0;
  for (const [name, description] of Object.entries(descriptions)) {
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

  console.log(`\nTotal updated: ${updated}/${Object.keys(descriptions).length}`);
  process.exit(0);
}

updateDescriptions();
