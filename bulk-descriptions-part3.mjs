import { getDb } from './server/db.ts';
import { products } from './drizzle/schema.ts';
import { eq } from 'drizzle-orm';

const bulkDescriptions = {
  'IGF-1 LR3 (1mg)': `IGF-1 LR3 Peptide - Comprehensive Research Guide

## Overview
IGF-1 LR3, also known as Long R3 Insulin-like Growth Factor-1, is a synthetic analog of insulin-like growth factor-1 with extended biological activity. This research peptide has been extensively studied for its potential role in promoting muscle growth, tissue repair, and metabolic health.

## Mechanism of Action
IGF-1 LR3 functions through IGF-1 receptor signaling pathways. The peptide binds to IGF-1 receptors on muscle cells and other tissues, promoting protein synthesis, cell proliferation, and tissue growth. The LR3 modification extends the peptide's half-life, making it longer-acting than native IGF-1.

## Research Applications

### IGF-1 LR3 and Muscle Growth
Extensive research demonstrates that IGF-1 LR3 promotes significant muscle growth. Studies show that the peptide stimulates muscle protein synthesis and promotes muscle cell proliferation and hypertrophy.

### IGF-1 LR3 and Tissue Repair
Research indicates that IGF-1 LR3 promotes tissue repair and regeneration. The peptide supports healing of damaged tissues and promotes recovery from injury.

### IGF-1 LR3 and Metabolic Effects
IGF-1 LR3 has been studied for its effects on metabolic parameters. The peptide may influence glucose metabolism and support metabolic health.

## Chemical Specifications
- **Product Name:** IGF-1 LR3 (1mg)
- **Form:** Lyophilized powder
- **Purity:** ≥99%
- **Storage:** Store in a cool, dry place at 2-8°C. Protect from light and moisture.

## Research Information
This product is intended for research, laboratory, and analytical purposes only. It is not intended for human consumption or any clinical application.

## Usage Guidelines
- For research and laboratory use only
- Not for human or animal consumption
- Handle in appropriate laboratory settings
- Store in cool, dry conditions protected from light
- Keep out of reach of children
- Follow all local regulations and guidelines

## Important Disclaimer
All products sold by Core Peptides are sold for research, laboratory, or analytical purposes only and are not for human consumption. Core Peptides is a chemical supplier. Core Peptides is not a compounding pharmacy or chemical compounding facility as defined under 503B of the Federal Food, Drug, and Cosmetic act.

The statements made within this website have not been evaluated by the US Food and Drug Administration. The products we offer are not intended to diagnose, treat, cure or prevent any disease.

Human/Animal Consumption Prohibited. Laboratory/In-Vitro Experimental Use Only.`,

  'Insulin-like Growth Factor-1 (IGF-1) (1mg)': `Insulin-like Growth Factor-1 (IGF-1) Peptide - Comprehensive Research Guide

## Overview
IGF-1, also known as Somatomedin C, is a naturally occurring peptide hormone that has been extensively studied for its potential role in promoting muscle growth, tissue repair, and metabolic health. This synthetic research peptide replicates the biological activity of native IGF-1.

## Mechanism of Action
IGF-1 functions through IGF-1 receptor signaling pathways. The peptide binds to IGF-1 receptors on muscle cells and other tissues, promoting protein synthesis, cell proliferation, and tissue growth. IGF-1 also interacts with insulin signaling pathways, influencing metabolic processes.

## Research Applications

### IGF-1 and Muscle Growth
Extensive research demonstrates that IGF-1 promotes muscle growth and development. Studies show that the peptide stimulates muscle protein synthesis and promotes muscle cell proliferation.

### IGF-1 and Tissue Repair
Research indicates that IGF-1 promotes tissue repair and regeneration. The peptide supports healing of damaged tissues and promotes recovery from injury across multiple tissue types.

### IGF-1 and Metabolic Health
IGF-1 has been studied for its effects on metabolic parameters. The peptide influences glucose metabolism and may support metabolic health.

## Chemical Specifications
- **Product Name:** Insulin-like Growth Factor-1 (IGF-1) (1mg)
- **Form:** Lyophilized powder
- **Purity:** ≥99%
- **Storage:** Store in a cool, dry place at 2-8°C. Protect from light and moisture.

## Research Information
This product is intended for research, laboratory, and analytical purposes only. It is not intended for human consumption or any clinical application.

## Usage Guidelines
- For research and laboratory use only
- Not for human or animal consumption
- Handle in appropriate laboratory settings
- Store in cool, dry conditions protected from light
- Keep out of reach of children
- Follow all local regulations and guidelines

## Important Disclaimer
All products sold by Core Peptides are sold for research, laboratory, or analytical purposes only and are not for human consumption. Core Peptides is a chemical supplier. Core Peptides is not a compounding pharmacy or chemical compounding facility as defined under 503B of the Federal Food, Drug, and Cosmetic act.

The statements made within this website have not been evaluated by the US Food and Drug Administration. The products we offer are not intended to diagnose, treat, cure or prevent any disease.

Human/Animal Consumption Prohibited. Laboratory/In-Vitro Experimental Use Only.`,

  'Leuprolide (1mg)': `Leuprolide Peptide - Comprehensive Research Guide

## Overview
Leuprolide is a synthetic nonapeptide that acts as a gonadotropin-releasing hormone (GnRH) agonist. This research peptide has been extensively studied for its potential role in reproductive hormone regulation and endocrine research applications.

## Mechanism of Action
Leuprolide functions as a GnRH agonist, binding to GnRH receptors on pituitary gonadotroph cells. Initial stimulation leads to increased release of LH and FSH. With continued administration, the peptide causes downregulation of GnRH receptors, resulting in suppression of gonadotropin release.

## Research Applications

### Leuprolide and Gonadotropin Regulation
Extensive research demonstrates that Leuprolide modulates gonadotropin release. Studies show that the peptide initially stimulates LH and FSH release, followed by sustained suppression with continued administration.

### Leuprolide and Sex Hormone Regulation
Research indicates that Leuprolide's suppression of gonadotropins results in reduced production of sex hormones. This property makes the peptide valuable for research into sex hormone regulation.

### Leuprolide and Reproductive Research
Leuprolide has been extensively studied for its effects on reproductive function. The peptide's ability to modulate gonadotropin and sex hormone levels makes it valuable for reproductive endocrinology research.

## Chemical Specifications
- **Product Name:** Leuprolide (1mg)
- **Form:** Lyophilized powder
- **Purity:** ≥99%
- **Storage:** Store in a cool, dry place at 2-8°C. Protect from light and moisture.

## Research Information
This product is intended for research, laboratory, and analytical purposes only. It is not intended for human consumption or any clinical application.

## Usage Guidelines
- For research and laboratory use only
- Not for human or animal consumption
- Handle in appropriate laboratory settings
- Store in cool, dry conditions protected from light
- Keep out of reach of children
- Follow all local regulations and guidelines

## Important Disclaimer
All products sold by Core Peptides are sold for research, laboratory, or analytical purposes only and are not for human consumption. Core Peptides is a chemical supplier. Core Peptides is not a compounding pharmacy or chemical compounding facility as defined under 503B of the Federal Food, Drug, and Cosmetic act.

The statements made within this website have not been evaluated by the US Food and Drug Administration. The products we offer are not intended to diagnose, treat, cure or prevent any disease.

Human/Animal Consumption Prohibited. Laboratory/In-Vitro Experimental Use Only.`,

  'LGD-4033 (25mg)': `LGD-4033 Peptide - Comprehensive Research Guide

## Overview
LGD-4033, also known as Ligandrol, is a selective androgen receptor modulator (SARM) that has been extensively studied for its potential role in promoting muscle growth and supporting bone health. This research peptide shows promise for selective tissue-specific effects.

## Mechanism of Action
LGD-4033 functions as a selective androgen receptor modulator, binding to androgen receptors in muscle and bone tissues with high selectivity. The peptide promotes muscle protein synthesis and supports bone density while minimizing effects on other tissues.

## Research Applications

### LGD-4033 and Muscle Growth
Extensive research demonstrates that LGD-4033 promotes significant muscle growth. Studies show that the peptide stimulates muscle protein synthesis and promotes muscle development with selectivity for muscle tissue.

### LGD-4033 and Bone Health
Research indicates that LGD-4033 supports bone health and bone density. The peptide's selective androgen receptor activity in bone tissue makes it valuable for research into bone health and osteoporosis prevention.

### LGD-4033 and Tissue Selectivity
LGD-4033 has been studied for its selective tissue effects. The peptide's ability to target muscle and bone while minimizing systemic effects makes it valuable for research into selective tissue-specific interventions.

## Chemical Specifications
- **Product Name:** LGD-4033 (25mg)
- **Form:** Lyophilized powder
- **Purity:** ≥99%
- **Storage:** Store in a cool, dry place at 2-8°C. Protect from light and moisture.

## Research Information
This product is intended for research, laboratory, and analytical purposes only. It is not intended for human consumption or any clinical application.

## Usage Guidelines
- For research and laboratory use only
- Not for human or animal consumption
- Handle in appropriate laboratory settings
- Store in cool, dry conditions protected from light
- Keep out of reach of children
- Follow all local regulations and guidelines

## Important Disclaimer
All products sold by Core Peptides are sold for research, laboratory, or analytical purposes only and are not for human consumption. Core Peptides is a chemical supplier. Core Peptides is not a compounding pharmacy or chemical compounding facility as defined under 503B of the Federal Food, Drug, and Cosmetic act.

The statements made within this website have not been evaluated by the US Food and Drug Administration. The products we offer are not intended to diagnose, treat, cure or prevent any disease.

Human/Animal Consumption Prohibited. Laboratory/In-Vitro Experimental Use Only.`,

  'MK-677 (25mg)': `MK-677 Peptide - Comprehensive Research Guide

## Overview
MK-677, also known as Ibutamoren, is a synthetic growth hormone secretagogue that has been extensively studied for its potential role in promoting growth hormone release and supporting metabolic health. This research peptide acts as a ghrelin receptor agonist.

## Mechanism of Action
MK-677 functions as a ghrelin receptor agonist, binding to growth hormone secretagogue receptors in the brain. The peptide stimulates the release of growth hormone from the pituitary gland and promotes the synthesis of new growth hormone. MK-677's mechanism is distinct from traditional growth hormone secretagogues.

## Research Applications

### MK-677 and Growth Hormone Release
Extensive research demonstrates that MK-677 effectively stimulates growth hormone release. Studies show that the peptide induces sustained increases in growth hormone levels with oral bioavailability.

### MK-677 and Metabolic Effects
Research suggests that MK-677 may have significant effects on metabolic parameters. The peptide's ability to stimulate growth hormone release may influence body composition and metabolic rate.

### MK-677 and Appetite Regulation
Some research indicates that MK-677 may have effects on appetite regulation. The peptide's ghrelin-mimetic properties may stimulate appetite, making it valuable for research into appetite control mechanisms.

## Chemical Specifications
- **Product Name:** MK-677 (25mg)
- **Form:** Lyophilized powder
- **Purity:** ≥99%
- **Storage:** Store in a cool, dry place at 2-8°C. Protect from light and moisture.

## Research Information
This product is intended for research, laboratory, and analytical purposes only. It is not intended for human consumption or any clinical application.

## Usage Guidelines
- For research and laboratory use only
- Not for human or animal consumption
- Handle in appropriate laboratory settings
- Store in cool, dry conditions protected from light
- Keep out of reach of children
- Follow all local regulations and guidelines

## Important Disclaimer
All products sold by Core Peptides are sold for research, laboratory, or analytical purposes only and are not for human consumption. Core Peptides is a chemical supplier. Core Peptides is not a compounding pharmacy or chemical compounding facility as defined under 503B of the Federal Food, Drug, and Cosmetic act.

The statements made within this website have not been evaluated by the US Food and Drug Administration. The products we offer are not intended to diagnose, treat, cure or prevent any disease.

Human/Animal Consumption Prohibited. Laboratory/In-Vitro Experimental Use Only.`,

  'MK-2866 (25mg)': `MK-2866 Peptide - Comprehensive Research Guide

## Overview
MK-2866, also known as Ostarine, is a selective androgen receptor modulator (SARM) that has been extensively studied for its potential role in promoting muscle growth and supporting bone health. This research peptide shows promise for selective tissue-specific effects.

## Mechanism of Action
MK-2866 functions as a selective androgen receptor modulator, binding to androgen receptors in muscle and bone tissues. The peptide promotes muscle protein synthesis and supports bone density while demonstrating selectivity for target tissues.

## Research Applications

### MK-2866 and Muscle Growth
Extensive research demonstrates that MK-2866 promotes muscle growth and development. Studies show that the peptide stimulates muscle protein synthesis with selectivity for muscle tissue.

### MK-2866 and Bone Health
Research indicates that MK-2866 supports bone health and bone density. The peptide's selective androgen receptor activity in bone tissue makes it valuable for bone health research.

### MK-2866 and Muscle Wasting
MK-2866 has been studied for its potential to support muscle health in wasting conditions. The peptide's selective muscle-promoting effects make it valuable for research into muscle preservation.

## Chemical Specifications
- **Product Name:** MK-2866 (25mg)
- **Form:** Lyophilized powder
- **Purity:** ≥99%
- **Storage:** Store in a cool, dry place at 2-8°C. Protect from light and moisture.

## Research Information
This product is intended for research, laboratory, and analytical purposes only. It is not intended for human consumption or any clinical application.

## Usage Guidelines
- For research and laboratory use only
- Not for human or animal consumption
- Handle in appropriate laboratory settings
- Store in cool, dry conditions protected from light
- Keep out of reach of children
- Follow all local regulations and guidelines

## Important Disclaimer
All products sold by Core Peptides are sold for research, laboratory, or analytical purposes only and are not for human consumption. Core Peptides is a chemical supplier. Core Peptides is not a compounding pharmacy or chemical compounding facility as defined under 503B of the Federal Food, Drug, and Cosmetic act.

The statements made within this website have not been evaluated by the US Food and Drug Administration. The products we offer are not intended to diagnose, treat, cure or prevent any disease.

Human/Animal Consumption Prohibited. Laboratory/In-Vitro Experimental Use Only.`,

  'NAD+ (25mg)': `NAD+ Peptide - Comprehensive Research Guide

## Overview
NAD+, also known as Nicotinamide Adenine Dinucleotide, is a coenzyme found in all living cells that has been extensively studied for its potential role in supporting cellular energy production and metabolic health. This research peptide is crucial for numerous biological processes.

## Mechanism of Action
NAD+ functions as a critical coenzyme in cellular metabolism. The molecule participates in redox reactions essential for energy production, DNA repair, and cellular signaling. NAD+ levels decline with age, and restoring NAD+ levels may support cellular health and metabolic function.

## Research Applications

### NAD+ and Cellular Energy
Extensive research demonstrates that NAD+ is essential for cellular energy production. Studies show that the coenzyme participates in glycolysis, the citric acid cycle, and the electron transport chain, supporting ATP synthesis.

### NAD+ and Metabolic Health
Research indicates that NAD+ supports metabolic health and function. The coenzyme's role in cellular metabolism makes it valuable for research into metabolic optimization and metabolic disease.

### NAD+ and Cellular Repair
NAD+ has been studied for its role in cellular repair mechanisms. The coenzyme participates in DNA repair and supports cellular stress response pathways, making it valuable for research into cellular health and longevity.

## Chemical Specifications
- **Product Name:** NAD+ (25mg)
- **Form:** Lyophilized powder
- **Purity:** ≥99%
- **Storage:** Store in a cool, dry place at 2-8°C. Protect from light and moisture.

## Research Information
This product is intended for research, laboratory, and analytical purposes only. It is not intended for human consumption or any clinical application.

## Usage Guidelines
- For research and laboratory use only
- Not for human or animal consumption
- Handle in appropriate laboratory settings
- Store in cool, dry conditions protected from light
- Keep out of reach of children
- Follow all local regulations and guidelines

## Important Disclaimer
All products sold by Core Peptides are sold for research, laboratory, or analytical purposes only and are not for human consumption. Core Peptides is a chemical supplier. Core Peptides is not a compounding pharmacy or chemical compounding facility as defined under 503B of the Federal Food, Drug, and Cosmetic act.

The statements made within this website have not been evaluated by the US Food and Drug Administration. The products we offer are not intended to diagnose, treat, cure or prevent any disease.

Human/Animal Consumption Prohibited. Laboratory/In-Vitro Experimental Use Only.`,

  'NANDROLONE PHENYLPROPIONATE (100mg/ml)': `Nandrolone Phenylpropionate Peptide - Comprehensive Research Guide

## Overview
Nandrolone Phenylpropionate is a synthetic anabolic androgenic steroid that has been extensively studied for its potential role in promoting muscle growth and supporting bone health. This research peptide is a modified form of nandrolone with an extended ester.

## Mechanism of Action
Nandrolone Phenylpropionate functions through androgen receptor signaling pathways. The peptide binds to androgen receptors in muscle and bone tissues, promoting protein synthesis and supporting tissue growth. The phenylpropionate ester provides extended biological activity.

## Research Applications

### Nandrolone Phenylpropionate and Muscle Growth
Extensive research demonstrates that Nandrolone Phenylpropionate promotes muscle growth and development. Studies show that the peptide stimulates muscle protein synthesis and promotes muscle hypertrophy.

### Nandrolone Phenylpropionate and Bone Health
Research indicates that Nandrolone Phenylpropionate supports bone health and bone density. The peptide's androgen receptor activity in bone tissue makes it valuable for bone health research.

### Nandrolone Phenylpropionate and Athletic Performance
Nandrolone Phenylpropionate has been studied for its potential effects on athletic performance. The peptide's muscle-promoting properties make it valuable for research into performance enhancement.

## Chemical Specifications
- **Product Name:** NANDROLONE PHENYLPROPIONATE (100mg/ml)
- **Form:** Injectable solution
- **Purity:** ≥99%
- **Storage:** Store in a cool, dry place at 2-8°C. Protect from light and moisture.

## Research Information
This product is intended for research, laboratory, and analytical purposes only. It is not intended for human consumption or any clinical application.

## Usage Guidelines
- For research and laboratory use only
- Not for human or animal consumption
- Handle in appropriate laboratory settings
- Store in cool, dry conditions protected from light
- Keep out of reach of children
- Follow all local regulations and guidelines

## Important Disclaimer
All products sold by Core Peptides are sold for research, laboratory, or analytical purposes only and are not for human consumption. Core Peptides is a chemical supplier. Core Peptides is not a compounding pharmacy or chemical compounding facility as defined under 503B of the Federal Food, Drug, and Cosmetic act.

The statements made within this website have not been evaluated by the US Food and Drug Administration. The products we offer are not intended to diagnose, treat, cure or prevent any disease.

Human/Animal Consumption Prohibited. Laboratory/In-Vitro Experimental Use Only.`,

  'OXYTOCIN (10mg)': `Oxytocin Peptide - Comprehensive Research Guide

## Overview
Oxytocin is a naturally occurring nonapeptide hormone that has been extensively studied for its potential role in social bonding, trust, and reproductive function. This synthetic research peptide replicates the biological activity of native oxytocin.

## Mechanism of Action
Oxytocin functions through oxytocin receptor signaling pathways. The peptide binds to oxytocin receptors in the brain and peripheral tissues, promoting social bonding, trust, and reproductive behaviors. Oxytocin also has effects on pain perception and stress responses.

## Research Applications

### Oxytocin and Social Bonding
Extensive research demonstrates that Oxytocin promotes social bonding and trust. Studies show that the peptide enhances social cognition and promotes prosocial behaviors.

### Oxytocin and Reproductive Function
Research indicates that Oxytocin plays a crucial role in reproductive function. The peptide promotes uterine contractions during labor and supports milk ejection during lactation.

### Oxytocin and Stress Response
Oxytocin has been studied for its effects on stress response and anxiety. The peptide may modulate stress-related neural pathways and support emotional regulation.

## Chemical Specifications
- **Product Name:** OXYTOCIN (10mg)
- **Form:** Lyophilized powder
- **Purity:** ≥99%
- **Storage:** Store in a cool, dry place at 2-8°C. Protect from light and moisture.

## Research Information
This product is intended for research, laboratory, and analytical purposes only. It is not intended for human consumption or any clinical application.

## Usage Guidelines
- For research and laboratory use only
- Not for human or animal consumption
- Handle in appropriate laboratory settings
- Store in cool, dry conditions protected from light
- Keep out of reach of children
- Follow all local regulations and guidelines

## Important Disclaimer
All products sold by Core Peptides are sold for research, laboratory, or analytical purposes only and are not for human consumption. Core Peptides is a chemical supplier. Core Peptides is not a compounding pharmacy or chemical compounding facility as defined under 503B of the Federal Food, Drug, and Cosmetic act.

The statements made within this website have not been evaluated by the US Food and Drug Administration. The products we offer are not intended to diagnose, treat, cure or prevent any disease.

Human/Animal Consumption Prohibited. Laboratory/In-Vitro Experimental Use Only.`,

  'PT-141 (10mg)': `PT-141 Peptide - Comprehensive Research Guide

## Overview
PT-141, also known as Bremelanotide, is a synthetic peptide that acts as a melanocortin receptor agonist. This research peptide has been extensively studied for its potential role in promoting sexual arousal and supporting sexual function.

## Mechanism of Action
PT-141 functions as a melanocortin receptor agonist, binding to melanocortin receptors in the brain. The peptide activates neural pathways involved in sexual arousal and desire, promoting sexual motivation and function through central nervous system mechanisms.

## Research Applications

### PT-141 and Sexual Arousal
Extensive research demonstrates that PT-141 promotes sexual arousal and desire. Studies show that the peptide activates neural pathways involved in sexual motivation and function.

### PT-141 and Sexual Function
Research indicates that PT-141 supports sexual function in both males and females. The peptide's effects on sexual arousal make it valuable for research into sexual function and dysfunction.

### PT-141 and Melanocortin Signaling
PT-141 has been studied for its effects on melanocortin signaling pathways. The peptide's melanocortin receptor activity makes it valuable for research into melanocortin-mediated physiological processes.

## Chemical Specifications
- **Product Name:** PT-141 (10mg)
- **Form:** Lyophilized powder
- **Purity:** ≥99%
- **Storage:** Store in a cool, dry place at 2-8°C. Protect from light and moisture.

## Research Information
This product is intended for research, laboratory, and analytical purposes only. It is not intended for human consumption or any clinical application.

## Usage Guidelines
- For research and laboratory use only
- Not for human or animal consumption
- Handle in appropriate laboratory settings
- Store in cool, dry conditions protected from light
- Keep out of reach of children
- Follow all local regulations and guidelines

## Important Disclaimer
All products sold by Core Peptides are sold for research, laboratory, or analytical purposes only and are not for human consumption. Core Peptides is a chemical supplier. Core Peptides is not a compounding pharmacy or chemical compounding facility as defined under 503B of the Federal Food, Drug, and Cosmetic act.

The statements made within this website have not been evaluated by the US Food and Drug Administration. The products we offer are not intended to diagnose, treat, cure or prevent any disease.

Human/Animal Consumption Prohibited. Laboratory/In-Vitro Experimental Use Only.`,

  'RAD-140 (25mg)': `RAD-140 Peptide - Comprehensive Research Guide

## Overview
RAD-140, also known as Testolone, is a selective androgen receptor modulator (SARM) that has been extensively studied for its potential role in promoting muscle growth and supporting bone health. This research peptide shows promise for selective tissue-specific effects.

## Mechanism of Action
RAD-140 functions as a selective androgen receptor modulator, binding to androgen receptors in muscle and bone tissues with high selectivity. The peptide promotes muscle protein synthesis and supports bone density while minimizing effects on other tissues.

## Research Applications

### RAD-140 and Muscle Growth
Extensive research demonstrates that RAD-140 promotes significant muscle growth. Studies show that the peptide stimulates muscle protein synthesis with selectivity for muscle tissue.

### RAD-140 and Bone Health
Research indicates that RAD-140 supports bone health and bone density. The peptide's selective androgen receptor activity in bone tissue makes it valuable for bone health research.

### RAD-140 and Tissue Selectivity
RAD-140 has been studied for its selective tissue effects. The peptide's ability to target muscle and bone while minimizing systemic effects makes it valuable for research into selective tissue-specific interventions.

## Chemical Specifications
- **Product Name:** RAD-140 (25mg)
- **Form:** Lyophilized powder
- **Purity:** ≥99%
- **Storage:** Store in a cool, dry place at 2-8°C. Protect from light and moisture.

## Research Information
This product is intended for research, laboratory, and analytical purposes only. It is not intended for human consumption or any clinical application.

## Usage Guidelines
- For research and laboratory use only
- Not for human or animal consumption
- Handle in appropriate laboratory settings
- Store in cool, dry conditions protected from light
- Keep out of reach of children
- Follow all local regulations and guidelines

## Important Disclaimer
All products sold by Core Peptides are sold for research, laboratory, or analytical purposes only and are not for human consumption. Core Peptides is a chemical supplier. Core Peptides is not a compounding pharmacy or chemical compounding facility as defined under 503B of the Federal Food, Drug, and Cosmetic act.

The statements made within this website have not been evaluated by the US Food and Drug Administration. The products we offer are not intended to diagnose, treat, cure or prevent any disease.

Human/Animal Consumption Prohibited. Laboratory/In-Vitro Experimental Use Only.`,

  'S-4 (25mg)': `S-4 Peptide - Comprehensive Research Guide

## Overview
S-4, also known as Andarine, is a selective androgen receptor modulator (SARM) that has been extensively studied for its potential role in promoting muscle growth and supporting bone health. This research peptide shows promise for selective tissue-specific effects.

## Mechanism of Action
S-4 functions as a selective androgen receptor modulator, binding to androgen receptors in muscle and bone tissues. The peptide promotes muscle protein synthesis and supports bone density while demonstrating selectivity for target tissues.

## Research Applications

### S-4 and Muscle Growth
Extensive research demonstrates that S-4 promotes muscle growth and development. Studies show that the peptide stimulates muscle protein synthesis with selectivity for muscle tissue.

### S-4 and Bone Health
Research indicates that S-4 supports bone health and bone density. The peptide's selective androgen receptor activity in bone tissue makes it valuable for bone health research.

### S-4 and Fat Loss
S-4 has been studied for its potential effects on body composition. The peptide's selective tissue effects may support fat loss while preserving muscle mass.

## Chemical Specifications
- **Product Name:** S-4 (25mg)
- **Form:** Lyophilized powder
- **Purity:** ≥99%
- **Storage:** Store in a cool, dry place at 2-8°C. Protect from light and moisture.

## Research Information
This product is intended for research, laboratory, and analytical purposes only. It is not intended for human consumption or any clinical application.

## Usage Guidelines
- For research and laboratory use only
- Not for human or animal consumption
- Handle in appropriate laboratory settings
- Store in cool, dry conditions protected from light
- Keep out of reach of children
- Follow all local regulations and guidelines

## Important Disclaimer
All products sold by Core Peptides are sold for research, laboratory, or analytical purposes only and are not for human consumption. Core Peptides is a chemical supplier. Core Peptides is not a compounding pharmacy or chemical compounding facility as defined under 503B of the Federal Food, Drug, and Cosmetic act.

The statements made within this website have not been evaluated by the US Food and Drug Administration. The products we offer are not intended to diagnose, treat, cure or prevent any disease.

Human/Animal Consumption Prohibited. Laboratory/In-Vitro Experimental Use Only.`,

  'TESTOSTERONE PROPIONATE (100mg/ml)': `Testosterone Propionate Peptide - Comprehensive Research Guide

## Overview
Testosterone Propionate is a synthetic anabolic androgenic steroid that has been extensively studied for its potential role in promoting muscle growth and supporting bone health. This research peptide is a modified form of testosterone with a short ester.

## Mechanism of Action
Testosterone Propionate functions through androgen receptor signaling pathways. The peptide binds to androgen receptors in muscle and bone tissues, promoting protein synthesis and supporting tissue growth. The propionate ester provides relatively short biological activity.

## Research Applications

### Testosterone Propionate and Muscle Growth
Extensive research demonstrates that Testosterone Propionate promotes muscle growth and development. Studies show that the peptide stimulates muscle protein synthesis and promotes muscle hypertrophy.

### Testosterone Propionate and Bone Health
Research indicates that Testosterone Propionate supports bone health and bone density. The peptide's androgen receptor activity in bone tissue makes it valuable for bone health research.

### Testosterone Propionate and Athletic Performance
Testosterone Propionate has been studied for its potential effects on athletic performance. The peptide's muscle-promoting properties make it valuable for research into performance enhancement.

## Chemical Specifications
- **Product Name:** TESTOSTERONE PROPIONATE (100mg/ml)
- **Form:** Injectable solution
- **Purity:** ≥99%
- **Storage:** Store in a cool, dry place at 2-8°C. Protect from light and moisture.

## Research Information
This product is intended for research, laboratory, and analytical purposes only. It is not intended for human consumption or any clinical application.

## Usage Guidelines
- For research and laboratory use only
- Not for human or animal consumption
- Handle in appropriate laboratory settings
- Store in cool, dry conditions protected from light
- Keep out of reach of children
- Follow all local regulations and guidelines

## Important Disclaimer
All products sold by Core Peptides are sold for research, laboratory, or analytical purposes only and are not for human consumption. Core Peptides is a chemical supplier. Core Peptides is not a compounding pharmacy or chemical compounding facility as defined under 503B of the Federal Food, Drug, and Cosmetic act.

The statements made within this website have not been evaluated by the US Food and Drug Administration. The products we offer are not intended to diagnose, treat, cure or prevent any disease.

Human/Animal Consumption Prohibited. Laboratory/In-Vitro Experimental Use Only.`,

  'TESTOSTERONE ENANTHATE (250mg/ml)': `Testosterone Enanthate Peptide - Comprehensive Research Guide

## Overview
Testosterone Enanthate is a synthetic anabolic androgenic steroid that has been extensively studied for its potential role in promoting muscle growth and supporting bone health. This research peptide is a modified form of testosterone with an extended ester.

## Mechanism of Action
Testosterone Enanthate functions through androgen receptor signaling pathways. The peptide binds to androgen receptors in muscle and bone tissues, promoting protein synthesis and supporting tissue growth. The enanthate ester provides extended biological activity.

## Research Applications

### Testosterone Enanthate and Muscle Growth
Extensive research demonstrates that Testosterone Enanthate promotes muscle growth and development. Studies show that the peptide stimulates muscle protein synthesis and promotes muscle hypertrophy.

### Testosterone Enanthate and Bone Health
Research indicates that Testosterone Enanthate supports bone health and bone density. The peptide's androgen receptor activity in bone tissue makes it valuable for bone health research.

### Testosterone Enanthate and Athletic Performance
Testosterone Enanthate has been studied for its potential effects on athletic performance. The peptide's muscle-promoting properties make it valuable for research into performance enhancement.

## Chemical Specifications
- **Product Name:** TESTOSTERONE ENANTHATE (250mg/ml)
- **Form:** Injectable solution
- **Purity:** ≥99%
- **Storage:** Store in a cool, dry place at 2-8°C. Protect from light and moisture.

## Research Information
This product is intended for research, laboratory, and analytical purposes only. It is not intended for human consumption or any clinical application.

## Usage Guidelines
- For research and laboratory use only
- Not for human or animal consumption
- Handle in appropriate laboratory settings
- Store in cool, dry conditions protected from light
- Keep out of reach of children
- Follow all local regulations and guidelines

## Important Disclaimer
All products sold by Core Peptides are sold for research, laboratory, or analytical purposes only and are not for human consumption. Core Peptides is a chemical supplier. Core Peptides is not a compounding pharmacy or chemical compounding facility as defined under 503B of the Federal Food, Drug, and Cosmetic act.

The statements made within this website have not been evaluated by the US Food and Drug Administration. The products we offer are not intended to diagnose, treat, cure or prevent any disease.

Human/Animal Consumption Prohibited. Laboratory/In-Vitro Experimental Use Only.`,

  'TESTOSTERONE CYPIONATE (250mg/ml)': `Testosterone Cypionate Peptide - Comprehensive Research Guide

## Overview
Testosterone Cypionate is a synthetic anabolic androgenic steroid that has been extensively studied for its potential role in promoting muscle growth and supporting bone health. This research peptide is a modified form of testosterone with an extended ester.

## Mechanism of Action
Testosterone Cypionate functions through androgen receptor signaling pathways. The peptide binds to androgen receptors in muscle and bone tissues, promoting protein synthesis and supporting tissue growth. The cypionate ester provides extended biological activity.

## Research Applications

### Testosterone Cypionate and Muscle Growth
Extensive research demonstrates that Testosterone Cypionate promotes muscle growth and development. Studies show that the peptide stimulates muscle protein synthesis and promotes muscle hypertrophy.

### Testosterone Cypionate and Bone Health
Research indicates that Testosterone Cypionate supports bone health and bone density. The peptide's androgen receptor activity in bone tissue makes it valuable for bone health research.

### Testosterone Cypionate and Athletic Performance
Testosterone Cypionate has been studied for its potential effects on athletic performance. The peptide's muscle-promoting properties make it valuable for research into performance enhancement.

## Chemical Specifications
- **Product Name:** TESTOSTERONE CYPIONATE (250mg/ml)
- **Form:** Injectable solution
- **Purity:** ≥99%
- **Storage:** Store in a cool, dry place at 2-8°C. Protect from light and moisture.

## Research Information
This product is intended for research, laboratory, and analytical purposes only. It is not intended for human consumption or any clinical application.

## Usage Guidelines
- For research and laboratory use only
- Not for human or animal consumption
- Handle in appropriate laboratory settings
- Store in cool, dry conditions protected from light
- Keep out of reach of children
- Follow all local regulations and guidelines

## Important Disclaimer
All products sold by Core Peptides are sold for research, laboratory, or analytical purposes only and are not for human consumption. Core Peptides is a chemical supplier. Core Peptides is not a compounding pharmacy or chemical compounding facility as defined under 503B of the Federal Food, Drug, and Cosmetic act.

The statements made within this website have not been evaluated by the US Food and Drug Administration. The products we offer are not intended to diagnose, treat, cure or prevent any disease.

Human/Animal Consumption Prohibited. Laboratory/In-Vitro Experimental Use Only.`,
};

async function updateDescriptions() {
  const db = await getDb();
  if (!db) {
    console.error('Database not available');
    process.exit(1);
  }

  let updated = 0;
  for (const [name, description] of Object.entries(bulkDescriptions)) {
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

  console.log(`\nTotal updated: ${updated}/${Object.keys(bulkDescriptions).length}`);
  process.exit(0);
}

updateDescriptions();
