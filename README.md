# json-schema
## Introduction
**🧑‍🎓 What is JSON Schema?**  

JSON Schema is a vocabulary for annotating and validating JSON data. It defines the shape of JSON documents (types, required fields, structure, and constraints). When applied, a validator checks input JSON against the schema and reports whether it is valid or which rules it violates.  

A JSON Schema acts like a contract: applications built on top of it can reliably manipulate the same structure of data.  

👉 In short: **JSON Schema = rules + validation for JSON data structure.**

This repository hosts the **[schema.json](./schema.json)** file defined by [universal-resume](https://github.com/universal-resume), designed to represent a professional resume.  

This schema is heavily inspired by the [JSON Resume](https://github.com/jsonresume) project. Check this [section]() to learn more about the differences.

## Integration
This [schema.json](./schema.json) is generated using a [builder](./build.ts), based on a source of truth written in TypeScript in the [ts-schema](https://github.com/universal-resume/ts-schema) repository (🙏 thanks to the Effect `JSONSchema` module).  

This schema can be used with any JSON Schema validator.  
For integration in a TypeScript environment, you can install the `@universal-resume/ts-schema` package to benefit from the included types and validators.  
Support for other languages may come in the future.

## Contributing
⚠️ Please do not edit [schema.json](./schema.json) directly.  
The schema is generated from the [ts-schema](https://github.com/universal-resume/ts-schema) repository, which is the source of truth.  

Contributions (fixes, extensions, discussions, improvement request) should be made in the `ts-schema` repository.  

## Sections
A professional resume in [universal-resume](https://github.com/universal-resume) is structured as a set of standard sections.  
Some are optional, while others (like `basics`) are required.  

- **`awards`** ([Award](#award)) — optional list.  
- **`basics`** ([Basics](#basics)) — required.  
- **`certificates`** ([Certificate](#certificate)) — optional list.  
- **`education`** ([Education](#education)) — optional list.  
- **`employments`** ([Employment](#employment)) — optional list.  
- **`initiatives`** ([Initiative](#initiative)) — optional list.  
- **`interests`** ([Interest](#interest)) — optional list.  
- **`languages`** ([Language](#language)) — optional list.  
- **`publications`** ([Publication](#publication)) — optional list.  
- **`skills`** ([Skill](#skill)) — optional list.  


### Award
Formal recognition received for outstanding performance, achievement, or contribution.  

[universal-resume](https://github.com/universal-resume) defines an Award as:  
- **`date`** ([Date](#date)) — required. The date you obtained the award.  
- **`issuer`** ([Organization](#organization)) — required. The organization that issued the award.  
- **`location`** ([Location](#location)) — optional. Where the award was obtained.  
- **`summary`** ([Summary](#summary)) — optional. A short context or description of the award.  
- **`tags`** ([Tag](#tag)) — optional list. Keywords you want to associate with this award.  
- **`title`** ([ProperNoun](#propernoun)) — required. The official title of the award.  


### Basics
General information about yourself, mainly personal details not directly tied to past professional experiences.  

[universal-resume](https://github.com/universal-resume) defines **Basics** as:  
- **`availability`** — optional. Indicates when you plan to be open to work.  
- **`birth`** ([Date](#date)) — optional. Your date of birth, if you want to share your age.  
- **`contact`** ([Contact](#contact)) — optional. Contact details so recruiters can reach you.  
- **`drivingLicenses`** — optional list. Driving licenses you hold (may matter for certain jobs).  
- **`headline`** — required. A headline for your resume, usually the position or role you are seeking.  
- **`location`** ([Location](#location)) — optional. Where you live, or where you are looking for a job.  
- **`name`** ([ProperNoun](#propernoun)) — required. Your full name (given + family name).  
- **`nationalities`** ([CountryCode](#countrycode)) — optional list. Your nationalities.  
- **`picture`** ([Url](#url)) — optional. A profile picture.  
- **`profiles`** ([Profile](#profile)) — optional list. Links to social media or platforms where you publish content.  
- **`remote`** — optional boolean. Indicates whether you are open to remote work.  
- **`summary`** ([Summary](#summary)) — optional. A short introduction giving context about your current situation and what you’re looking for.  
- **`website`** ([Url](#url)) — optional. A personal website, online portfolio, or other online presence you want to highlight.  


### Certificate
An official credential that verifies you have successfully completed a course, training program, or examination, proving your knowledge or competency in a specific area.  

[universal-resume](https://github.com/universal-resume) defines a **Certificate** as:  
- **`date`** ([Date](#date)) — required. The date you obtained the certificate.  
- **`issuer`** ([Organization](#organization)) — required. The organization, school, or institution that issued the certificate.  
- **`name`** ([ProperNoun](#propernoun)) — required. The official name of the certificate.  
- **`summary`** ([Summary](#summary)) — optional. A short context or description of the certificate.  
- **`tags`** ([Tag](#tag)) — optional list. Keywords you want to explicitly associate with this certificate.  
- **`url`** ([Url](#url)) — optional. A link to the original document or the certificate’s online page.  


### Education
Formal academic background and qualifications obtained from schools, colleges, universities, or other accredited institutions. This section highlights your field of study, level of academic achievement, and foundational knowledge.  

[universal-resume](https://github.com/universal-resume) defines **Education** as:  
- **`area`** — required. The field of study, e.g. "Computer Science".  
- **`courses`** ([Course](#course)) — optional list. Courses relevant to this education.  
- **`endDate`** ([Date](#date)) — optional. The date the program ended (omit if ongoing).  
- **`location`** ([Location](#location)) — optional. Where the education took place.  
- **`organization`** ([Organization](#organization)) — required. The school, university, or institution that delivered the program.  
- **`score`** — optional. Grade, GPA, or other measure of academic performance.  
- **`startDate`** ([Date](#date)) — required. When the program began.  
- **`type`** — required. The level of the program, e.g. "Bachelor", "Master", "PhD".  
- **`url`** ([Url](#url)) — optional. A link to the institution or the specific program.  


### Employment
Paid work experience, including jobs, contracts, and other professional engagements.  

[universal-resume](https://github.com/universal-resume) defines **Employment** as:  
- **`endDate`** ([Date](#date)) — optional. When the employment ended (omit if ongoing).  
- **`highlight`** ([Highlight](#highlight)) — optional list. Specific achievements or contributions you want to emphasize in this role.  
- **`location`** ([Location](#location)) — optional. Where the employment took place.  
- **`organization`** ([Organization](#organization)) — required. The organization you worked for.  
- **`position`** ([Position](#position)) — required. The role you held in the organization or project.  
- **`reference`** ([Reference](#reference)) — optional list. References from people you worked with.  
- **`startDate`** ([Date](#date)) — required. When the employment began.  
- **`summary`** ([Summary](#summary)) — optional. A short description or context for this experience.  
- **`tags`** ([Tag](#tag)) — optional list. Keywords you want to explicitly associate with this experience.  
- **`type`** — required. One of: `agency`, `apprenticeship`, `contract`, `freelance`, `internal`, `internship`.  
- **`url`** ([Url](#url)) — optional. A link to the organization or to a project you worked on.  


### Initiative
Unpaid experiences, such as volunteering, personal projects, research, or community involvement.  

[universal-resume](https://github.com/universal-resume) defines **Initiative** as:  
- **`endDate`** ([Date](#date)) — optional. When the initiative ended (omit if ongoing).  
- **`highlight`** ([Highlight](#highlight)) — optional list. Concrete achievements or contributions to emphasize in this experience.  
- **`location`** ([Location](#location)) — optional. Where the initiative took place.  
- **`organization`** ([Organization](#organization)) — optional. The organization or institution associated with this initiative.  
- **`position`** ([Position](#position)) — required. The role you held in the organization or project.  
- **`reference`** ([Reference](#reference)) — optional list. References from people you collaborated with.  
- **`startDate`** ([Date](#date)) — required. When the initiative began.  
- **`status`** — optional. Current state of the initiative, e.g. "Active", "Paused", "Archived".  
- **`summary`** ([Summary](#summary)) — optional. A short description or context for this experience.  
- **`tags`** ([Tag](#tag)) — optional list. Keywords you want to explicitly associate with this initiative.  
- **`type`** — required. One of: `civic`, `education`, `open-source`, `personal`, `research`, `startup`, `volunteering`.  
- **`url`** ([Url](#url)) — optional. A link to the organization or project.  


### Interest
Personal interests, hobbies, or activities you want to highlight outside of your professional experiences.  

[universal-resume](https://github.com/universal-resume) defines **Interest** as:  
- **`name`** — required. The name of the interest (e.g. "Photography", "Hiking").  
- **`summary`** ([Summary](#summary)) — optional. A short description providing more details about this interest.  
- **`tags`** ([Tag](#tag)) — optional list. Keywords you want to explicitly associate with this interest.  


### Language
Languages you speak and your level of proficiency.  

[universal-resume](https://github.com/universal-resume) defines **Language** as:  
- **`certificates`** ([Certificate](#certificate)) — optional list. Certificates that prove your proficiency in this language.  
- **`countryCode`** ([CountryCode](#countrycode)) — optional. The country code associated with the language (e.g. "FR" for French).  
- **`fluency`** — optional. One of: `bilingual`, `elementary`, `fluent`, `full-professional`, `limited-working`, `professional-working`.  
- **`name`** ([ProperNoun](#propernoun)) — required. The name of the language.  


### Publication
Academic, professional, or personal publications such as articles, books, conference papers, or blog posts.  

[universal-resume](https://github.com/universal-resume) defines **Publication** as:  
- **`authors`** ([ProperNoun](#propernoun)) — optional list. Authors of the publication.  
- **`date`** ([Date](#date)) — required. When the publication was released.  
- **`doi`** — optional. Digital Object Identifier (DOI) for the publication.  
- **`name`** ([ProperNoun](#propernoun)) — required. The title of the publication.  
- **`publisher`** ([ProperNoun](#propernoun)) — optional. The publisher or institution responsible for the publication.  
- **`summary`** ([Summary](#summary)) — optional. A short description with more details about this publication.  
- **`tags`** ([Tag](#tag)) — optional list. Keywords you want to explicitly associate with this publication.  
- **`type`** — required. One of: `article`, `blog-post`, `book`, `conference`, `journal`, `presentation`, `thesis`, `report`, `webinar`, `whitepaper`.  
- **`url`** ([Url](#url)) — optional. A link to the publication.  


### Skill
Abilities, technical competencies, or expertise you want to highlight.  

[universal-resume](https://github.com/universal-resume) defines a **Skill** as:  
- **`level`** — optional. Your proficiency level (e.g. "Beginner", "Intermediate", "Expert").  
- **`name`** — required. The name of the skill (e.g. "JavaScript", "Project Management").  
- **`tags`** ([Tag](#tag)) — optional list. Keywords you want to explicitly associate with this skill.  
- **`yearsOfExperience`** — optional number. How many years of experience you have with this skill.  


## Base components
Reusable building blocks defined in the `$defs` section of the JSON Schema.  
They are referenced throughout the schema using `$ref`.  

### Date
Represents a point in time with different levels of precision:  
- `YYYY-MM-DD` for an exact day.  
- `YYYY-MM` for a month.  
- `YYYY` for a year.  
Example: `2025-08-18`, `2024-02`, `2021`.  

### ProperNoun
A proper noun representing a person, title, place, institution, etc. Each word should be capitalized.  
Example: `John Doe`, `Paris`, `Apple`, `Google AI Research Certificate`.  

### Url
A valid internet resource identifier.  
Example: `https://github.com/universal-resume`  

### Email
A valid lowercase email address.  
Example: `john.doe@example.com`  

### CountryCode
A country identifier in ISO 3166-1 alpha-2 format.  
Example: `US`, `GB`, `FR`, `DE`.  

### Summary
A short text describing the context of an experience and your role in it.  
Example: `Led a team of 5 engineers to deliver a new authentication system.`  

### Highlight
Concrete achievements you want to emphasize in an experience.  
Example: `Reduced deployment times from weeks to hours.`  

### Tag
A short, independent keyword associated with an experience.  
Example: `AI`, `Programming`, `Automation`, `Customer Support`.  

### Position
Your role in the related experience.  
Example: `Software Engineer`, `Marketing Manager`.  

### Location
The place where an experience occurred (city, country, or region).  

[universal-resume](https://github.com/universal-resume) defines a **Location** as:  
- **`address`** — optional.  
- **`city`** ([ProperNoun](#propernoun)) — optional.  
- **`countryCode`** ([CountryCode](#countrycode)) — optional.  
- **`postalCode`** — optional.  
- **`region`** ([ProperNoun](#propernoun)) — optional.  

### Organization
The company or institution associated with an experience.  

[universal-resume](https://github.com/universal-resume) defines an **Organization** as:  
- **`name`** ([ProperNoun](#propernoun)) — required.  
- **`location`** ([Location](#location)) — optional.  
- **`description`** — optional.  

### Contact
Ways to contact a person.  

[universal-resume](https://github.com/universal-resume) defines a **Contact** as:  
- **`email`** ([Email](#email)) — optional.  
- **`phone`** — optional.  
- **`linkedin`** ([Url](#url)) — optional.  

### Profile
An identifier on a social network or content platform.  

[universal-resume](https://github.com/universal-resume) defines a **Profile** as:  
- **`network`** — required. One of: `Github`, `Instagram`, `LinkedIn`, `Reddit`, `Tiktok`, `X`, `Twitch`, `Youtube`.  
- **`url`** ([Url](#url)) — required.  
- **`username`** — optional.  

### Reference
A reference from someone you worked with.  

[universal-resume](https://github.com/universal-resume) defines a **Reference** as:  
- **`contact`** ([Contact](#contact)) — optional. Contact details of the referee.  
- **`date`** ([Date](#date)) — required.  
- **`name`** ([ProperNoun](#propernoun)) — required. Name of the referee.  
- **`position`** ([Position](#position)) — optional. Role of the referee.  
- **`testimonial`** — optional. A testimonial from the referee.  

### Course
A specific subject or module within an education program.  

[universal-resume](https://github.com/universal-resume) defines a **Course** as:  
- **`name`** — required.  
- **`summary`** ([Summary](#summary)) — optional.  
- **`format`** — optional. The delivery format, e.g. `Online bootcamp`, `In-person`.  


## Differences with json-resume

This project is heavily inspired by [json-resume](https://github.com/jsonresume), which has been a reference for defining resumes as JSON for many years.  
However, we are diverging and maintaining a separate schema to address several limitations and to better support modern tooling.  

The main reasons for diverging include:  
- **Required fields** — enforcing certain fields makes the schema stronger, improves type-safety, and unlocks more reliable tooling on top of it (date, name, title, headline, etc.).  
- **Additional properties** — adding missing fields that are commonly needed in professional resumes (availability, references, remote, and many others)
- **Enums instead of free strings** — replacing arbitrary strings with enums for fields like `type` or `fluency`, ensuring consistency and better validation.  
- **Reworked nomenclature** — clearer, less ambuigous and more consistent naming conventions across the schema (work -> employment, project -> initiative, etc.).  
- **Native TypeScript integration** — the schema is derived from [Effect](https://effect.website) `ts` definitions, allowing us to export types and validators directly (See [ts-schema](https://github.com/universal-resume/ts-schema)).  
- **Maintenance** — several long-standing, unclosed issues in the json-resume repo blocked evolution; this project aims to move faster and stay actively maintained.  

👉 In short: **universal-resume builds on json-resume’s ideas but focuses on stronger typing, modern tooling, and active maintenance.**


