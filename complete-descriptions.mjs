import { getDb } from './server/db.ts';
import { products } from './drizzle/schema.ts';
import { eq } from 'drizzle-orm';

const completeDescriptions = {
  'ACE-031 (1mg)': `ACE-031 Peptide

ACE-031 is a synthetic peptide that acts as an activin receptor ligand trap. It is designed to bind to activin receptors and modulate signaling pathways involved in muscle growth and development. ACE-031 is being researched for its potential to promote muscle growth and improve muscle function in various conditions.

The peptide works by sequestering activin molecules, preventing them from binding to their natural receptors. This mechanism is believed to potentially enhance muscle mass and strength. Research suggests that ACE-031 may have applications in conditions characterized by muscle wasting or weakness.

Research Applications

ACE-031 is primarily being investigated for its potential role in promoting muscle growth and development. The peptide's mechanism of action involves inhibiting myostatin and activin signaling, which are known regulators of muscle mass. By modulating these pathways, ACE-031 may potentially support muscle development and strength.

Studies have shown that ACE-031 may enhance muscle mass and improve muscle function. The peptide is being researched for its potential therapeutic applications in conditions involving muscle wasting.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

ACE-031 is available for research and laboratory purposes only.`,

  'Adipotide (FTPP) (10mg)': `Adipotide (FTPP) Peptide

Adipotide, also known as FTPP (Fatty Acid Targeting Peptide), is a synthetic peptide designed to target adipose tissue and induce apoptosis in fat cells. It consists of a targeting sequence that directs it to adipose tissue, combined with a pro-apoptotic sequence. Adipotide is being researched for its potential role in weight management and metabolic regulation.

The peptide works by targeting the vasculature of adipose tissue and inducing cell death in fat cells. This mechanism is believed to potentially support weight management and metabolic health.

Research Applications

Adipotide has been studied for its potential to promote weight loss and improve metabolic health. Research suggests that the peptide may selectively target and reduce adipose tissue mass.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Adipotide is available for research and laboratory purposes only.`,

  'AOD 9604 (5mg)': `AOD 9604 Peptide

AOD 9604 is a synthetic peptide derived from the C-terminal region of human growth hormone (hGH). It consists of amino acids 176-191 of hGH and is designed to stimulate lipolysis (fat breakdown) without stimulating growth or insulin resistance. AOD 9604 is being researched for its potential role in weight management and metabolic regulation.

The peptide works by stimulating the breakdown of fat cells while avoiding the systemic effects associated with full-length growth hormone. This selective mechanism is believed to make AOD 9604 potentially useful for weight management applications.

Research Applications

AOD 9604 has been studied for its potential to promote fat loss and support metabolic health. Research suggests that the peptide may enhance lipolysis and support body composition.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

AOD 9604 is available for research and laboratory purposes only.`,

  'ARA-290 (16mg)': `ARA-290 Peptide

ARA-290 is a synthetic peptide that is an erythropoietin (EPO) receptor agonist. It is designed to activate EPO receptors without the hematopoietic effects of EPO. ARA-290 is being researched for its potential neuroprotective and tissue-protective properties, particularly in conditions involving inflammation and tissue damage.

The peptide works by activating EPO receptors on non-hematopoietic cells, which may provide neuroprotective and anti-inflammatory benefits without affecting red blood cell production.

Research Applications

ARA-290 has been studied for its potential neuroprotective properties and its role in supporting tissue health. Research suggests that the peptide may have anti-inflammatory effects and support cellular protection.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

ARA-290 is available for research and laboratory purposes only.`,

  'DSIP (5mg)': `DSIP Peptide

DSIP (Delta Sleep-Inducing Peptide) is a synthetic peptide designed to promote restful sleep and support natural sleep cycles. The peptide has been extensively studied for its potential to enhance sleep quality and support healthy sleep patterns.

The peptide works by modulating neurotransmitter systems involved in sleep regulation. Research suggests that DSIP may promote deep, restorative sleep and support circadian rhythm function.

Research Applications

DSIP has been studied for its potential to improve sleep quality and duration. Research suggests that the peptide may enhance sleep onset and support healthy sleep architecture.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

DSIP is available for research and laboratory purposes only.`,

  'Epithalon (25mg)': `Epithalon Peptide

Epithalon is a synthetic tetrapeptide designed to support telomerase activity and promote cellular health. The peptide sequence is: Ala-Glu-Asp-Gly

Epithalon has been studied for its potential to support cellular aging and promote longevity. Research suggests that the peptide may enhance telomerase activity and support cellular regeneration.

Research Applications

Epithalon has been studied for its potential to support cellular health and promote longevity. Research suggests that the peptide may enhance telomerase activity and support cellular function.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Epithalon is available for research and laboratory purposes only.`,

  'Follistatin-344 (1mg)': `Follistatin-344 Peptide

Follistatin-344 is a synthetic peptide derived from the follistatin protein designed to inhibit myostatin and promote muscle growth. The peptide works by binding to and sequestering myostatin, preventing it from inhibiting muscle development.

This mechanism is believed to potentially enhance muscle mass and strength. Research suggests that Follistatin-344 may have applications in promoting muscle growth and supporting muscle development.

Research Applications

Follistatin-344 has been studied for its potential to promote muscle growth and development. Research suggests that the peptide may enhance muscle mass and support muscle function.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Follistatin-344 is available for research and laboratory purposes only.`,

  'Fragment 176-191 (5mg)': `Fragment 176-191 Peptide

Fragment 176-191 is a synthetic peptide derived from the C-terminal region of human growth hormone designed to stimulate lipolysis (fat breakdown). The peptide consists of amino acids 176-191 of hGH.

Fragment 176-191 works by stimulating the breakdown of fat cells without affecting growth or insulin sensitivity. This selective mechanism is believed to make it potentially useful for weight management applications.

Research Applications

Fragment 176-191 has been studied for its potential to promote fat loss and support metabolic health. Research suggests that the peptide may enhance lipolysis and support body composition.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Fragment 176-191 is available for research and laboratory purposes only.`,

  'GHK Basic (50mg)': `GHK Basic Peptide

GHK Basic is a tripeptide designed to support collagen synthesis, wound healing, and skin health. The peptide sequence is: Gly-His-Lys

GHK has been extensively studied for its potential to promote collagen production and support skin health. Research suggests that the peptide may enhance skin elasticity and promote wound healing.

Research Applications

GHK Basic has been studied for its potential to support collagen synthesis and promote skin health. Research suggests that the peptide may enhance skin appearance and support wound healing.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

GHK Basic is available for research and laboratory purposes only.`,

  'GHRP-6 (5mg / 10mg)': `GHRP-6 Peptide

GHRP-6 is a synthetic hexapeptide that acts as a growth hormone secretagogue. It is designed to stimulate the release of growth hormone from the anterior pituitary gland.

GHRP-6 has been extensively studied for its potential to enhance growth hormone secretion and support various physiological functions related to growth hormone activity.

Research Applications

GHRP-6 has been studied for its potential to stimulate growth hormone release and support metabolic health. Research suggests that the peptide may enhance growth hormone levels and support body composition.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

GHRP-6 is available for research and laboratory purposes only.`,

  'Gonadorelin (GnRH) (10mg)': `Gonadorelin (GnRH) Peptide

Gonadorelin is a synthetic decapeptide that stimulates the release of luteinizing hormone and follicle-stimulating hormone. The peptide is a gonadotropin-releasing hormone analog.

Gonadorelin has been studied for its potential to support reproductive hormone physiology and support hormonal health.

Research Applications

Gonadorelin has been studied for its potential to support reproductive health and hormone regulation. Research suggests that the peptide may stimulate the release of reproductive hormones.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Gonadorelin is available for research and laboratory purposes only.`,

  'Hexarelin (5mg)': `Hexarelin Peptide

Hexarelin is a synthetic hexapeptide that acts as a growth hormone secretagogue. It is designed to stimulate the release of growth hormone from the anterior pituitary gland.

Hexarelin has been extensively studied for its potential to enhance growth hormone secretion and support various physiological functions related to growth hormone activity.

Research Applications

Hexarelin has been studied for its potential to stimulate growth hormone release and support metabolic health. Research suggests that the peptide may enhance growth hormone levels.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Hexarelin is available for research and laboratory purposes only.`,

  'Humanin (10mg)': `Humanin Peptide

Humanin is a synthetic peptide derived from mitochondrial DNA designed to support cellular health. The peptide has been studied for its potential to promote cell survival and support cellular function.

Research suggests that Humanin may have cytoprotective properties and support cellular health in various conditions.

Research Applications

Humanin has been studied for its potential to support cellular health and promote cell survival. Research suggests that the peptide may have protective effects on cells.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Humanin is available for research and laboratory purposes only.`,

  'Kisspeptin-10 (10mg)': `Kisspeptin-10 Peptide

Kisspeptin-10 is a synthetic peptide designed to stimulate GnRH release and support reproductive hormone physiology. The peptide has been extensively studied for its role in reproductive health.

Research suggests that Kisspeptin-10 may support reproductive hormone secretion and support hormonal health.

Research Applications

Kisspeptin-10 has been studied for its potential to support reproductive health and hormone regulation. Research suggests that the peptide may stimulate reproductive hormone release.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Kisspeptin-10 is available for research and laboratory purposes only.`,

  'KPV (4mg)': `KPV Peptide

KPV is a synthetic tripeptide derived from alpha-melanocyte-stimulating hormone designed to support immune function. The peptide sequence is: Lys-Pro-Val

KPV has been studied for its potential to support immune health and promote immune cell function.

Research Applications

KPV has been studied for its potential to support immune function and promote immune health. Research suggests that the peptide may enhance immune cell activity.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

KPV is available for research and laboratory purposes only.`,

  'LL-37 (5mg)': `LL-37 Peptide

LL-37 is a synthetic peptide derived from the cathelicidin protein designed to support immune function. The peptide has antimicrobial and immunomodulatory properties.

Research suggests that LL-37 may support immune health and promote immune cell function.

Research Applications

LL-37 has been studied for its potential to support immune function and promote immune health. Research suggests that the peptide may have antimicrobial and immunomodulatory effects.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

LL-37 is available for research and laboratory purposes only.`,

  'Matrixyl (200mg)': `Matrixyl Peptide

Matrixyl is a synthetic pentapeptide designed to support collagen synthesis and skin health. The peptide has been extensively studied for its potential to promote collagen production and improve skin appearance.

Research suggests that Matrixyl may enhance skin elasticity and support skin health.

Research Applications

Matrixyl has been studied for its potential to support collagen synthesis and promote skin health. Research suggests that the peptide may enhance skin appearance and support wound healing.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Matrixyl is available for research and laboratory purposes only.`,

  'MGF (5mg)': `MGF Peptide

MGF (Mechano Growth Factor) is a synthetic peptide derived from IGF-1 designed to support muscle growth. The peptide has been studied for its potential to promote muscle development and support muscle recovery.

Research suggests that MGF may enhance muscle growth and support muscle function.

Research Applications

MGF has been studied for its potential to support muscle growth and promote muscle development. Research suggests that the peptide may enhance muscle recovery and support muscle function.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

MGF is available for research and laboratory purposes only.`,

  'MOTS-C (10mg)': `MOTS-C Peptide

MOTS-C is a synthetic peptide derived from mitochondrial DNA designed to support metabolic health. The peptide has been studied for its potential to promote metabolic function and support energy metabolism.

Research suggests that MOTS-C may enhance metabolic health and support cellular energy production.

Research Applications

MOTS-C has been studied for its potential to support metabolic health and promote metabolic function. Research suggests that the peptide may enhance energy metabolism.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

MOTS-C is available for research and laboratory purposes only.`,

  'N-Acetyl Selank (10mg)': `N-Acetyl Selank Peptide

N-Acetyl Selank is a synthetic peptide derivative designed to support cognitive function and reduce anxiety. The peptide has been studied for its potential to promote mental clarity and support emotional health.

Research suggests that N-Acetyl Selank may enhance cognitive function and support emotional well-being.

Research Applications

N-Acetyl Selank has been studied for its potential to support cognitive function and promote emotional health. Research suggests that the peptide may enhance mental clarity and reduce anxiety.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

N-Acetyl Selank is available for research and laboratory purposes only.`,

  'N-Acetyl Semax (25mg)': `N-Acetyl Semax Peptide

N-Acetyl Semax is a synthetic peptide derivative designed to support cognitive function and promote neuroprotection. The peptide has been extensively studied for its potential to enhance mental performance and support brain health.

Research suggests that N-Acetyl Semax may enhance cognitive function and support neuroprotection.

Research Applications

N-Acetyl Semax has been studied for its potential to support cognitive function and promote brain health. Research suggests that the peptide may enhance mental clarity and support neuroprotection.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

N-Acetyl Semax is available for research and laboratory purposes only.`,

  'Oxytocin (10mg)': `Oxytocin Peptide

Oxytocin is a synthetic peptide hormone that plays a role in social bonding and reproductive function. The peptide has been studied for its potential to support social behavior and reproductive health.

Research suggests that Oxytocin may support social bonding and reproductive function.

Research Applications

Oxytocin has been studied for its potential to support social behavior and reproductive health. Research suggests that the peptide may enhance social bonding and support reproductive function.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Oxytocin is available for research and laboratory purposes only.`,

  'Pal-AHK (200mg)': `Pal-AHK Peptide

Pal-AHK is a palmitoyl-modified version of AHK designed to support skin health and collagen synthesis. The peptide has been studied for its potential to enhance skin appearance and promote collagen production.

Research suggests that Pal-AHK may support skin health and enhance collagen synthesis.

Research Applications

Pal-AHK has been studied for its potential to support skin health and promote collagen synthesis. Research suggests that the peptide may enhance skin appearance and support wound healing.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Pal-AHK is available for research and laboratory purposes only.`,

  'Pal-GHK (200mg)': `Pal-GHK Peptide

Pal-GHK is a palmitoyl-modified version of GHK designed to support collagen synthesis and skin health. The peptide has been studied for its potential to enhance skin appearance and promote collagen production.

Research suggests that Pal-GHK may support skin health and enhance collagen synthesis.

Research Applications

Pal-GHK has been studied for its potential to support skin health and promote collagen synthesis. Research suggests that the peptide may enhance skin appearance and support wound healing.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Pal-GHK is available for research and laboratory purposes only.`,

  'Palmitoyl Tetrapeptide-7 (200mg)': `Palmitoyl Tetrapeptide-7 Peptide

Palmitoyl Tetrapeptide-7 is a synthetic peptide designed to support skin health and reduce inflammation. The peptide has been studied for its potential to promote skin health and support anti-inflammatory effects.

Research suggests that Palmitoyl Tetrapeptide-7 may support skin health and promote anti-inflammatory effects.

Research Applications

Palmitoyl Tetrapeptide-7 has been studied for its potential to support skin health and promote anti-inflammatory effects. Research suggests that the peptide may enhance skin appearance and reduce inflammation.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Palmitoyl Tetrapeptide-7 is available for research and laboratory purposes only.`,

  'PE-22-28 (8mg)': `PE-22-28 Peptide

PE-22-28 is a synthetic peptide designed to support cellular health and promote cellular regeneration. The peptide has been studied for its potential to enhance cellular function and support tissue repair.

Research suggests that PE-22-28 may support cellular health and promote cellular regeneration.

Research Applications

PE-22-28 has been studied for its potential to support cellular health and promote cellular regeneration. Research suggests that the peptide may enhance cellular function and support tissue repair.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

PE-22-28 is available for research and laboratory purposes only.`,

  'PEG-MGF (5mg)': `PEG-MGF Peptide

PEG-MGF is a polyethylene glycol-modified version of Mechano Growth Factor designed to support muscle growth. The peptide has been studied for its potential to promote muscle development and support muscle recovery.

Research suggests that PEG-MGF may enhance muscle growth and support muscle function.

Research Applications

PEG-MGF has been studied for its potential to support muscle growth and promote muscle development. Research suggests that the peptide may enhance muscle recovery and support muscle function.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

PEG-MGF is available for research and laboratory purposes only.`,

  'Pentapeptide-18 (Leuphasyl) (200mg)': `Pentapeptide-18 (Leuphasyl) Peptide

Pentapeptide-18 (Leuphasyl) is a synthetic pentapeptide designed to support skin health and reduce wrinkles. The peptide has been studied for its potential to promote skin health and enhance skin appearance.

Research suggests that Pentapeptide-18 may support skin health and reduce the appearance of wrinkles.

Research Applications

Pentapeptide-18 has been studied for its potential to support skin health and reduce wrinkles. Research suggests that the peptide may enhance skin appearance and support skin elasticity.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Pentapeptide-18 is available for research and laboratory purposes only.`,

  'Pinealon (20mg)': `Pinealon Peptide

Pinealon is a synthetic tripeptide designed to support pineal gland function and promote healthy sleep cycles. The peptide has been studied for its potential to enhance sleep quality and support circadian rhythm function.

Research suggests that Pinealon may support sleep health and promote healthy sleep cycles.

Research Applications

Pinealon has been studied for its potential to support pineal gland function and promote healthy sleep cycles. Research suggests that the peptide may enhance sleep quality and support circadian rhythm function.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Pinealon is available for research and laboratory purposes only.`,

  'PT-141 (Bremelanotide) (10mg)': `PT-141 (Bremelanotide) Peptide

PT-141 (Bremelanotide) is a synthetic peptide that acts as a melanocortin receptor agonist. The peptide has been studied for its potential to support sexual function and promote skin pigmentation.

Research suggests that PT-141 may support sexual function and promote skin pigmentation.

Research Applications

PT-141 has been studied for its potential to support sexual function and promote skin pigmentation. Research suggests that the peptide may enhance sexual response and support skin health.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

PT-141 is available for research and laboratory purposes only.`,

  'Receptor Grade IGF-1 LR3 (100mcg)': `Receptor Grade IGF-1 LR3 Peptide

Receptor Grade IGF-1 LR3 is a synthetic peptide derived from IGF-1 designed to promote muscle growth. The peptide has been extensively studied for its potential to enhance muscle development and support muscle recovery.

Research suggests that IGF-1 LR3 may enhance muscle growth and support muscle function.

Research Applications

IGF-1 LR3 has been studied for its potential to support muscle growth and promote muscle development. Research suggests that the peptide may enhance muscle recovery and support muscle function.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Receptor Grade IGF-1 LR3 is available for research and laboratory purposes only.`,

  'Selank (10mg)': `Selank Peptide

Selank is a synthetic peptide derived from tuftsin designed to support cognitive function and reduce anxiety. The peptide has been studied for its potential to enhance mental clarity and support emotional health.

Research suggests that Selank may enhance cognitive function and support emotional well-being.

Research Applications

Selank has been studied for its potential to support cognitive function and promote emotional health. Research suggests that the peptide may enhance mental clarity and reduce anxiety.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Selank is available for research and laboratory purposes only.`,

  'Semax (25mg)': `Semax Peptide

Semax is a synthetic peptide derived from ACTH designed to support cognitive function and promote neuroprotection. The peptide has been extensively studied for its potential to enhance mental performance and support brain health.

Research suggests that Semax may enhance cognitive function and support neuroprotection.

Research Applications

Semax has been studied for its potential to support cognitive function and promote brain health. Research suggests that the peptide may enhance mental clarity and support neuroprotection.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Semax is available for research and laboratory purposes only.`,

  'SNAP-8 (200mg)': `SNAP-8 Peptide

SNAP-8 is a synthetic octapeptide designed to support skin health and reduce the appearance of wrinkles. The peptide has been studied for its potential to promote skin health and enhance skin appearance.

Research suggests that SNAP-8 may support skin health and reduce wrinkles.

Research Applications

SNAP-8 has been studied for its potential to support skin health and reduce wrinkles. Research suggests that the peptide may enhance skin appearance and support skin elasticity.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

SNAP-8 is available for research and laboratory purposes only.`,

  'Syn-AKE (200mg)': `Syn-AKE Peptide

Syn-AKE is a synthetic tripeptide designed to mimic snake venom peptides and support skin health. The peptide has been studied for its potential to promote skin health and reduce wrinkles.

Research suggests that Syn-AKE may support skin health and reduce the appearance of wrinkles.

Research Applications

Syn-AKE has been studied for its potential to support skin health and reduce wrinkles. Research suggests that the peptide may enhance skin appearance and support skin elasticity.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Syn-AKE is available for research and laboratory purposes only.`,

  'Syn-Coll (Palmitoyl Tripeptide-5) (200mg)': `Syn-Coll (Palmitoyl Tripeptide-5) Peptide

Syn-Coll is a synthetic peptide with a palmitoyl modification designed to support collagen synthesis. The peptide has been studied for its potential to promote collagen production and enhance skin health.

Research suggests that Syn-Coll may support collagen synthesis and promote skin health.

Research Applications

Syn-Coll has been studied for its potential to support collagen synthesis and promote skin health. Research suggests that the peptide may enhance skin appearance and support skin elasticity.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Syn-Coll is available for research and laboratory purposes only.`,

  'Tesamorelin (2mg)': `Tesamorelin Peptide

Tesamorelin is a synthetic peptide that acts as a growth hormone-releasing hormone analog. The peptide has been studied for its potential to enhance growth hormone secretion and support metabolic health.

Research suggests that Tesamorelin may enhance growth hormone levels and support metabolic function.

Research Applications

Tesamorelin has been studied for its potential to enhance growth hormone secretion and support metabolic health. Research suggests that the peptide may support body composition and metabolic function.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Tesamorelin is available for research and laboratory purposes only.`,

  'Thymosin Alpha 1 (10mg)': `Thymosin Alpha 1 Peptide

Thymosin Alpha 1 is a synthetic peptide derived from thymosin designed to support immune function. The peptide has been extensively studied for its potential to enhance immune health and support immune cell function.

Research suggests that Thymosin Alpha 1 may enhance immune function and support immune health.

Research Applications

Thymosin Alpha 1 has been studied for its potential to support immune function and promote immune health. Research suggests that the peptide may enhance immune cell activity and support immune response.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Thymosin Alpha 1 is available for research and laboratory purposes only.`,

  'Triptorelin (100mcg)': `Triptorelin Peptide

Triptorelin is a synthetic peptide that acts as a gonadotropin-releasing hormone agonist. The peptide has been studied for its potential to support reproductive hormone regulation and support hormonal health.

Research suggests that Triptorelin may support reproductive hormone secretion and support hormonal health.

Research Applications

Triptorelin has been studied for its potential to support reproductive hormone regulation and promote hormonal health. Research suggests that the peptide may stimulate reproductive hormone release.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

Triptorelin is available for research and laboratory purposes only.`,

  'Vasoactive Intestinal Peptide (VIP) (5mg)': `Vasoactive Intestinal Peptide (VIP) Peptide

VIP is a synthetic peptide that plays a role in vasodilation, immune regulation, and neurotransmission. The peptide has been studied for its potential to support vascular health and immune function.

Research suggests that VIP may support vascular health and promote immune function.

Research Applications

VIP has been studied for its potential to support vascular health and promote immune function. Research suggests that the peptide may enhance vasodilation and support immune response.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

VIP is available for research and laboratory purposes only.`,

  'YK-11 (10mg)': `YK-11 Peptide

YK-11 is a synthetic peptide designed to support muscle growth and promote muscle development. The peptide has been studied for its potential to enhance muscle mass and support muscle function.

Research suggests that YK-11 may support muscle growth and promote muscle development.

Research Applications

YK-11 has been studied for its potential to support muscle growth and promote muscle development. Research suggests that the peptide may enhance muscle mass and support muscle function.

Chemical Specifications

Form: Lyophilized powder
Purity: >99%
Storage: Store in a cool, dry place. Protect from light and moisture.

YK-11 is available for research and laboratory purposes only.`,
};

async function updateDescriptions() {
  const db = await getDb();
  if (!db) {
    console.error('Database not available');
    process.exit(1);
  }

  let updated = 0;
  for (const [name, description] of Object.entries(completeDescriptions)) {
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

  console.log(`\nTotal updated: ${updated}/${Object.keys(completeDescriptions).length}`);
  process.exit(0);
}

updateDescriptions();
