import { getDb } from './server/db.ts';
import { products } from './drizzle/schema.ts';
import { eq } from 'drizzle-orm';

const bulkDescriptions = {
  'PROVIRON (25mg)': `Proviron Peptide - Comprehensive Research Guide

## Overview
Proviron, also known as Mesterolone, is a synthetic anabolic androgenic steroid that has been extensively studied for its potential role in supporting androgenic function and athletic performance. This research peptide is known for its mild anabolic effects.

## Mechanism of Action
Proviron functions through androgen receptor signaling pathways. The peptide binds to androgen receptors in various tissues, supporting androgenic function and tissue health. Proviron is known for its relatively mild anabolic activity with androgenic effects.

## Research Applications

### Proviron and Androgenic Function
Extensive research demonstrates that Proviron supports androgenic function. Studies show that the peptide promotes androgenic effects across multiple tissues.

### Proviron and Athletic Performance
Research indicates that Proviron may support athletic performance. The peptide's androgenic properties make it valuable for research into performance-related applications.

### Proviron and Tissue Health
Proviron has been studied for its effects on tissue health. The peptide's androgenic activity makes it valuable for research into tissue-specific effects.

## Chemical Specifications
- **Product Name:** PROVIRON (25mg)
- **Form:** Tablet/Capsule
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

  'CLOMID (50mg)': `Clomid Peptide - Comprehensive Research Guide

## Overview
Clomid, also known as Clomiphene Citrate, is a synthetic selective estrogen receptor modulator (SERM) that has been extensively studied for its potential role in supporting hormonal balance and reproductive function. This research peptide is commonly used in research applications.

## Mechanism of Action
Clomid functions as a selective estrogen receptor modulator, binding to estrogen receptors in various tissues. The peptide acts as an estrogen antagonist in some tissues and agonist in others, supporting hormonal balance and reproductive function.

## Research Applications

### Clomid and Hormonal Balance
Extensive research demonstrates that Clomid supports hormonal balance. Studies show that the peptide modulates estrogen signaling across multiple tissues.

### Clomid and Reproductive Function
Research indicates that Clomid supports reproductive function. The peptide's effects on hormonal balance make it valuable for reproductive research applications.

### Clomid and Endocrine Research
Clomid has been studied for its effects on endocrine function. The peptide's SERM properties make it valuable for research into hormonal regulation mechanisms.

## Chemical Specifications
- **Product Name:** CLOMID (50mg)
- **Form:** Tablet/Capsule
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

  'NOLVADEX (20mg)': `Nolvadex Peptide - Comprehensive Research Guide

## Overview
Nolvadex, also known as Tamoxifen Citrate, is a synthetic selective estrogen receptor modulator (SERM) that has been extensively studied for its potential role in supporting hormonal balance and breast health. This research peptide is commonly used in research applications.

## Mechanism of Action
Nolvadex functions as a selective estrogen receptor modulator, binding to estrogen receptors in various tissues. The peptide acts as an estrogen antagonist in some tissues and agonist in others, supporting hormonal balance and tissue health.

## Research Applications

### Nolvadex and Hormonal Balance
Extensive research demonstrates that Nolvadex supports hormonal balance. Studies show that the peptide modulates estrogen signaling across multiple tissues.

### Nolvadex and Breast Health
Research indicates that Nolvadex supports breast health. The peptide's effects on estrogen signaling make it valuable for research into breast tissue health.

### Nolvadex and Endocrine Research
Nolvadex has been studied for its effects on endocrine function. The peptide's SERM properties make it valuable for research into hormonal regulation mechanisms.

## Chemical Specifications
- **Product Name:** NOLVADEX (20mg)
- **Form:** Tablet/Capsule
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

  'AROMASIN (25mg)': `Aromasin Peptide - Comprehensive Research Guide

## Overview
Aromasin, also known as Exemestane, is a synthetic aromatase inhibitor that has been extensively studied for its potential role in supporting hormonal balance and reducing estrogen levels. This research peptide is commonly used in research applications.

## Mechanism of Action
Aromasin functions as an aromatase inhibitor, blocking the enzyme responsible for converting androgens to estrogens. The peptide irreversibly inhibits aromatase, resulting in reduced estrogen production and increased androgen levels.

## Research Applications

### Aromasin and Estrogen Reduction
Extensive research demonstrates that Aromasin effectively reduces estrogen levels. Studies show that the peptide inhibits aromatase and reduces estrogen production.

### Aromasin and Hormonal Balance
Research indicates that Aromasin supports hormonal balance by modulating estrogen and androgen levels. The peptide's effects on aromatase make it valuable for hormonal research.

### Aromasin and Endocrine Research
Aromasin has been studied for its effects on endocrine function. The peptide's aromatase inhibition properties make it valuable for research into hormonal regulation mechanisms.

## Chemical Specifications
- **Product Name:** AROMASIN (25mg)
- **Form:** Tablet/Capsule
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

  'ARIMIDEX (1mg)': `Arimidex Peptide - Comprehensive Research Guide

## Overview
Arimidex, also known as Anastrozole, is a synthetic aromatase inhibitor that has been extensively studied for its potential role in supporting hormonal balance and reducing estrogen levels. This research peptide is commonly used in research applications.

## Mechanism of Action
Arimidex functions as an aromatase inhibitor, blocking the enzyme responsible for converting androgens to estrogens. The peptide reversibly inhibits aromatase, resulting in reduced estrogen production and increased androgen levels.

## Research Applications

### Arimidex and Estrogen Reduction
Extensive research demonstrates that Arimidex effectively reduces estrogen levels. Studies show that the peptide inhibits aromatase and reduces estrogen production.

### Arimidex and Hormonal Balance
Research indicates that Arimidex supports hormonal balance by modulating estrogen and androgen levels. The peptide's effects on aromatase make it valuable for hormonal research.

### Arimidex and Endocrine Research
Arimidex has been studied for its effects on endocrine function. The peptide's aromatase inhibition properties make it valuable for research into hormonal regulation mechanisms.

## Chemical Specifications
- **Product Name:** ARIMIDEX (1mg)
- **Form:** Tablet/Capsule
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

  'LETROZOLE (2.5mg)': `Letrozole Peptide - Comprehensive Research Guide

## Overview
Letrozole is a synthetic aromatase inhibitor that has been extensively studied for its potential role in supporting hormonal balance and reducing estrogen levels. This research peptide is commonly used in research applications.

## Mechanism of Action
Letrozole functions as an aromatase inhibitor, blocking the enzyme responsible for converting androgens to estrogens. The peptide reversibly inhibits aromatase, resulting in reduced estrogen production and increased androgen levels.

## Research Applications

### Letrozole and Estrogen Reduction
Extensive research demonstrates that Letrozole effectively reduces estrogen levels. Studies show that the peptide inhibits aromatase and reduces estrogen production.

### Letrozole and Hormonal Balance
Research indicates that Letrozole supports hormonal balance by modulating estrogen and androgen levels. The peptide's effects on aromatase make it valuable for hormonal research.

### Letrozole and Endocrine Research
Letrozole has been studied for its effects on endocrine function. The peptide's aromatase inhibition properties make it valuable for research into hormonal regulation mechanisms.

## Chemical Specifications
- **Product Name:** LETROZOLE (2.5mg)
- **Form:** Tablet/Capsule
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

  'HCG (10000 IU)': `HCG Peptide - Comprehensive Research Guide

## Overview
HCG, also known as Human Chorionic Gonadotropin, is a naturally occurring hormone that has been extensively studied for its potential role in supporting gonadal function and reproductive health. This synthetic research peptide replicates the biological activity of native HCG.

## Mechanism of Action
HCG functions through LH receptor signaling pathways. The peptide binds to LH receptors on Leydig cells in the testes, stimulating testosterone production. HCG also has effects on other tissues and may support reproductive function.

## Research Applications

### HCG and Testosterone Production
Extensive research demonstrates that HCG stimulates testosterone production. Studies show that the peptide activates LH receptor signaling and promotes testosterone synthesis.

### HCG and Gonadal Function
Research indicates that HCG supports gonadal function and reproductive health. The peptide's effects on testosterone production make it valuable for reproductive research.

### HCG and Reproductive Research
HCG has been extensively studied for its effects on reproductive function. The peptide's ability to stimulate testosterone production makes it valuable for reproductive endocrinology research.

## Chemical Specifications
- **Product Name:** HCG (10000 IU)
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

  'GENERIC PHARMACEUTICAL GRADE PEPTIDES': `Generic Pharmaceutical Grade Peptides - Comprehensive Research Guide

## Overview
Generic pharmaceutical grade peptides represent a comprehensive category of research peptides manufactured to pharmaceutical standards. These research peptides have been extensively studied for various biological and therapeutic applications.

## Mechanism of Action
Generic pharmaceutical grade peptides function through multiple biological pathways depending on their specific composition and structure. These peptides are designed to interact with specific cellular receptors and signaling pathways to promote various biological effects.

## Research Applications

### Pharmaceutical Grade Quality
Extensive research demonstrates that pharmaceutical grade peptides maintain consistent quality and purity. Studies show that these peptides meet rigorous manufacturing and quality standards.

### Research Versatility
Research indicates that pharmaceutical grade peptides are suitable for diverse research applications. The peptides' quality and consistency make them valuable for various research purposes.

### Scientific Research
Pharmaceutical grade peptides have been studied for their applications in scientific research. The peptides' quality standards make them valuable for rigorous research protocols.

## Chemical Specifications
- **Product Name:** GENERIC PHARMACEUTICAL GRADE PEPTIDES
- **Form:** Lyophilized powder or Injectable solution
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
