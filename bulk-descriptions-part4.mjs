import { getDb } from './server/db.ts';
import { products } from './drizzle/schema.ts';
import { eq } from 'drizzle-orm';

const bulkDescriptions = {
  'TRENBOLONE ACETATE (100mg/ml)': `Trenbolone Acetate Peptide - Comprehensive Research Guide

## Overview
Trenbolone Acetate is a synthetic anabolic androgenic steroid that has been extensively studied for its potential role in promoting muscle growth and supporting athletic performance. This research peptide is one of the most potent anabolic steroids.

## Mechanism of Action
Trenbolone Acetate functions through androgen receptor signaling pathways with high potency. The peptide binds to androgen receptors in muscle and bone tissues, promoting protein synthesis and supporting tissue growth. The acetate ester provides relatively short biological activity.

## Research Applications

### Trenbolone Acetate and Muscle Growth
Extensive research demonstrates that Trenbolone Acetate promotes significant muscle growth. Studies show that the peptide stimulates muscle protein synthesis with high potency and efficacy.

### Trenbolone Acetate and Bone Health
Research indicates that Trenbolone Acetate supports bone health and bone density. The peptide's androgen receptor activity in bone tissue makes it valuable for bone health research.

### Trenbolone Acetate and Athletic Performance
Trenbolone Acetate has been studied for its potential effects on athletic performance. The peptide's muscle-promoting properties make it valuable for research into performance enhancement.

## Chemical Specifications
- **Product Name:** TRENBOLONE ACETATE (100mg/ml)
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

  'TRENBOLONE ENANTHATE (200mg/ml)': `Trenbolone Enanthate Peptide - Comprehensive Research Guide

## Overview
Trenbolone Enanthate is a synthetic anabolic androgenic steroid that has been extensively studied for its potential role in promoting muscle growth and supporting athletic performance. This research peptide is a modified form of trenbolone with an extended ester.

## Mechanism of Action
Trenbolone Enanthate functions through androgen receptor signaling pathways with high potency. The peptide binds to androgen receptors in muscle and bone tissues, promoting protein synthesis and supporting tissue growth. The enanthate ester provides extended biological activity.

## Research Applications

### Trenbolone Enanthate and Muscle Growth
Extensive research demonstrates that Trenbolone Enanthate promotes significant muscle growth. Studies show that the peptide stimulates muscle protein synthesis with high potency and sustained effects.

### Trenbolone Enanthate and Bone Health
Research indicates that Trenbolone Enanthate supports bone health and bone density. The peptide's androgen receptor activity in bone tissue makes it valuable for bone health research.

### Trenbolone Enanthate and Athletic Performance
Trenbolone Enanthate has been studied for its potential effects on athletic performance. The peptide's muscle-promoting properties make it valuable for research into performance enhancement.

## Chemical Specifications
- **Product Name:** TRENBOLONE ENANTHATE (200mg/ml)
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

  'STANOZOLOL (50mg/ml)': `Stanozolol Peptide - Comprehensive Research Guide

## Overview
Stanozolol is a synthetic anabolic androgenic steroid that has been extensively studied for its potential role in promoting muscle growth and supporting athletic performance. This research peptide is known for its oral bioavailability and potent effects.

## Mechanism of Action
Stanozolol functions through androgen receptor signaling pathways. The peptide binds to androgen receptors in muscle and bone tissues, promoting protein synthesis and supporting tissue growth. Stanozolol is known for its high anabolic activity with relatively lower androgenic effects.

## Research Applications

### Stanozolol and Muscle Growth
Extensive research demonstrates that Stanozolol promotes muscle growth and development. Studies show that the peptide stimulates muscle protein synthesis with high anabolic activity.

### Stanozolol and Bone Health
Research indicates that Stanozolol supports bone health and bone density. The peptide's androgen receptor activity in bone tissue makes it valuable for bone health research.

### Stanozolol and Athletic Performance
Stanozolol has been studied for its potential effects on athletic performance. The peptide's muscle-promoting properties make it valuable for research into performance enhancement.

## Chemical Specifications
- **Product Name:** STANOZOLOL (50mg/ml)
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

  'BOLDENONE UNDECYLENATE (250mg/ml)': `Boldenone Undecylenate Peptide - Comprehensive Research Guide

## Overview
Boldenone Undecylenate is a synthetic anabolic androgenic steroid that has been extensively studied for its potential role in promoting muscle growth and supporting athletic performance. This research peptide is known for its extended ester and sustained effects.

## Mechanism of Action
Boldenone Undecylenate functions through androgen receptor signaling pathways. The peptide binds to androgen receptors in muscle and bone tissues, promoting protein synthesis and supporting tissue growth. The undecylenate ester provides extended biological activity.

## Research Applications

### Boldenone Undecylenate and Muscle Growth
Extensive research demonstrates that Boldenone Undecylenate promotes muscle growth and development. Studies show that the peptide stimulates muscle protein synthesis with sustained effects.

### Boldenone Undecylenate and Bone Health
Research indicates that Boldenone Undecylenate supports bone health and bone density. The peptide's androgen receptor activity in bone tissue makes it valuable for bone health research.

### Boldenone Undecylenate and Athletic Performance
Boldenone Undecylenate has been studied for its potential effects on athletic performance. The peptide's muscle-promoting properties make it valuable for research into performance enhancement.

## Chemical Specifications
- **Product Name:** BOLDENONE UNDECYLENATE (250mg/ml)
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

  'DROSTANOLONE PROPIONATE (100mg/ml)': `Drostanolone Propionate Peptide - Comprehensive Research Guide

## Overview
Drostanolone Propionate is a synthetic anabolic androgenic steroid that has been extensively studied for its potential role in promoting muscle growth and supporting athletic performance. This research peptide is known for its potent anabolic effects.

## Mechanism of Action
Drostanolone Propionate functions through androgen receptor signaling pathways. The peptide binds to androgen receptors in muscle and bone tissues, promoting protein synthesis and supporting tissue growth. The propionate ester provides relatively short biological activity.

## Research Applications

### Drostanolone Propionate and Muscle Growth
Extensive research demonstrates that Drostanolone Propionate promotes muscle growth and development. Studies show that the peptide stimulates muscle protein synthesis with high potency.

### Drostanolone Propionate and Bone Health
Research indicates that Drostanolone Propionate supports bone health and bone density. The peptide's androgen receptor activity in bone tissue makes it valuable for bone health research.

### Drostanolone Propionate and Athletic Performance
Drostanolone Propionate has been studied for its potential effects on athletic performance. The peptide's muscle-promoting properties make it valuable for research into performance enhancement.

## Chemical Specifications
- **Product Name:** DROSTANOLONE PROPIONATE (100mg/ml)
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

  'MASTERON ENANTHATE (200mg/ml)': `Masteron Enanthate Peptide - Comprehensive Research Guide

## Overview
Masteron Enanthate is a synthetic anabolic androgenic steroid that has been extensively studied for its potential role in promoting muscle growth and supporting athletic performance. This research peptide is a modified form of drostanolone with an extended ester.

## Mechanism of Action
Masteron Enanthate functions through androgen receptor signaling pathways. The peptide binds to androgen receptors in muscle and bone tissues, promoting protein synthesis and supporting tissue growth. The enanthate ester provides extended biological activity.

## Research Applications

### Masteron Enanthate and Muscle Growth
Extensive research demonstrates that Masteron Enanthate promotes muscle growth and development. Studies show that the peptide stimulates muscle protein synthesis with sustained effects.

### Masteron Enanthate and Bone Health
Research indicates that Masteron Enanthate supports bone health and bone density. The peptide's androgen receptor activity in bone tissue makes it valuable for bone health research.

### Masteron Enanthate and Athletic Performance
Masteron Enanthate has been studied for its potential effects on athletic performance. The peptide's muscle-promoting properties make it valuable for research into performance enhancement.

## Chemical Specifications
- **Product Name:** MASTERON ENANTHATE (200mg/ml)
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

  'TRENBOLONE HEX (100mg/ml)': `Trenbolone Hex Peptide - Comprehensive Research Guide

## Overview
Trenbolone Hex is a synthetic anabolic androgenic steroid that has been extensively studied for its potential role in promoting muscle growth and supporting athletic performance. This research peptide features the longest-acting trenbolone ester.

## Mechanism of Action
Trenbolone Hex functions through androgen receptor signaling pathways with high potency. The peptide binds to androgen receptors in muscle and bone tissues, promoting protein synthesis and supporting tissue growth. The hexahydrobenzylcarbonate ester provides extended biological activity.

## Research Applications

### Trenbolone Hex and Muscle Growth
Extensive research demonstrates that Trenbolone Hex promotes significant muscle growth. Studies show that the peptide stimulates muscle protein synthesis with high potency and extended effects.

### Trenbolone Hex and Bone Health
Research indicates that Trenbolone Hex supports bone health and bone density. The peptide's androgen receptor activity in bone tissue makes it valuable for bone health research.

### Trenbolone Hex and Athletic Performance
Trenbolone Hex has been studied for its potential effects on athletic performance. The peptide's muscle-promoting properties make it valuable for research into performance enhancement.

## Chemical Specifications
- **Product Name:** TRENBOLONE HEX (100mg/ml)
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

  'ANAVAR (50mg)': `Anavar Peptide - Comprehensive Research Guide

## Overview
Anavar, also known as Oxandrolone, is a synthetic anabolic androgenic steroid that has been extensively studied for its potential role in promoting muscle growth and supporting athletic performance. This research peptide is known for its mild androgenic effects.

## Mechanism of Action
Anavar functions through androgen receptor signaling pathways. The peptide binds to androgen receptors in muscle and bone tissues, promoting protein synthesis and supporting tissue growth. Anavar is known for its high anabolic activity with relatively lower androgenic effects.

## Research Applications

### Anavar and Muscle Growth
Extensive research demonstrates that Anavar promotes muscle growth and development. Studies show that the peptide stimulates muscle protein synthesis with high anabolic activity.

### Anavar and Bone Health
Research indicates that Anavar supports bone health and bone density. The peptide's androgen receptor activity in bone tissue makes it valuable for bone health research.

### Anavar and Athletic Performance
Anavar has been studied for its potential effects on athletic performance. The peptide's muscle-promoting properties make it valuable for research into performance enhancement.

## Chemical Specifications
- **Product Name:** ANAVAR (50mg)
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

  'WINSTROL (50mg)': `Winstrol Peptide - Comprehensive Research Guide

## Overview
Winstrol, also known as Stanozolol, is a synthetic anabolic androgenic steroid that has been extensively studied for its potential role in promoting muscle growth and supporting athletic performance. This research peptide is known for its oral bioavailability.

## Mechanism of Action
Winstrol functions through androgen receptor signaling pathways. The peptide binds to androgen receptors in muscle and bone tissues, promoting protein synthesis and supporting tissue growth. Winstrol is known for its high anabolic activity with relatively lower androgenic effects.

## Research Applications

### Winstrol and Muscle Growth
Extensive research demonstrates that Winstrol promotes muscle growth and development. Studies show that the peptide stimulates muscle protein synthesis with high anabolic activity.

### Winstrol and Bone Health
Research indicates that Winstrol supports bone health and bone density. The peptide's androgen receptor activity in bone tissue makes it valuable for bone health research.

### Winstrol and Athletic Performance
Winstrol has been studied for its potential effects on athletic performance. The peptide's muscle-promoting properties make it valuable for research into performance enhancement.

## Chemical Specifications
- **Product Name:** WINSTROL (50mg)
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

  'DIANABOL (50mg)': `Dianabol Peptide - Comprehensive Research Guide

## Overview
Dianabol, also known as Methandienone, is a synthetic anabolic androgenic steroid that has been extensively studied for its potential role in promoting muscle growth and supporting athletic performance. This research peptide is known for its potent anabolic effects.

## Mechanism of Action
Dianabol functions through androgen receptor signaling pathways. The peptide binds to androgen receptors in muscle and bone tissues, promoting protein synthesis and supporting tissue growth. Dianabol is known for its high anabolic activity and rapid effects.

## Research Applications

### Dianabol and Muscle Growth
Extensive research demonstrates that Dianabol promotes significant muscle growth. Studies show that the peptide stimulates muscle protein synthesis with high potency and rapid effects.

### Dianabol and Bone Health
Research indicates that Dianabol supports bone health and bone density. The peptide's androgen receptor activity in bone tissue makes it valuable for bone health research.

### Dianabol and Athletic Performance
Dianabol has been studied for its potential effects on athletic performance. The peptide's muscle-promoting properties make it valuable for research into performance enhancement.

## Chemical Specifications
- **Product Name:** DIANABOL (50mg)
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

  'ANADROL (50mg)': `Anadrol Peptide - Comprehensive Research Guide

## Overview
Anadrol, also known as Oxymetholone, is a synthetic anabolic androgenic steroid that has been extensively studied for its potential role in promoting muscle growth and supporting athletic performance. This research peptide is known for its potent anabolic effects.

## Mechanism of Action
Anadrol functions through androgen receptor signaling pathways. The peptide binds to androgen receptors in muscle and bone tissues, promoting protein synthesis and supporting tissue growth. Anadrol is known for its high anabolic activity and rapid effects.

## Research Applications

### Anadrol and Muscle Growth
Extensive research demonstrates that Anadrol promotes significant muscle growth. Studies show that the peptide stimulates muscle protein synthesis with high potency and rapid effects.

### Anadrol and Bone Health
Research indicates that Anadrol supports bone health and bone density. The peptide's androgen receptor activity in bone tissue makes it valuable for bone health research.

### Anadrol and Athletic Performance
Anadrol has been studied for its potential effects on athletic performance. The peptide's muscle-promoting properties make it valuable for research into performance enhancement.

## Chemical Specifications
- **Product Name:** ANADROL (50mg)
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
