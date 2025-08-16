# json-schema

The [universal-resume](https://github.com/universal-resume) standard that defined a professional resume in the json-schema format.

Inspired by the [json-resume](https://github.com/jsonresume) organization adding required fields and a few other improvements.

=> See the complete [schema.json](./schema.json).

Generated using this [builder](./build.ts) from the [ts-schema](https://github.com/universal-resume/ts-schema) repository, thanks to Effect `JSONSchema` module.

## Sections
[universal-resume](https://github.com/universal-resume) considere a professional [Resume](https://github.com/universal-resume/ts-schema/blob/main/src/resume.ts) defined as: 
- An optional list of `awards` ([Award](#award)).
- Some required `basics` ([Basics](#basics)).
- An optional list of `certificates`.
- An optional list of `education`.
- An optional list of `employments`.
- An optional list of `initiatives`.
- An optional list of `interests`.
- An optional list of `languages`.
- An optional list of `publications`.
- An optional list of `skills`.

### Award
Formal recognition you’ve received for outstanding performance, achievement, or contribution.
[universal-resume](https://github.com/universal-resume) considere an Award defined as: 
- A required `date` ([Date]()) you obtained the Award.
- A required `issuer` that identify the [Organization]() who issued the Award.
- An optional `location` defining the [Location]() you obtained the Award.
- An optional `summary` ([Summary]()) that brings a bit of context on this experience.
- An optional list of `tags` ([Tag]()) you want to explicitly associate to this experience.
- A required `title` ([ProperNoun]()) of the Award.


### Basics
Some informations about yourself, mainly personal and not related to your past professional experiences.
[universal-resume](https://github.com/universal-resume) considere Basics defined as: 
- An optional `availability` that indicates when you plan to be open to work.
- An optional `birth` ([Date]()) if you want to communicate on you age.
- An optional `contact` ([Contact]()) so recruiters know how to reach you.
- An optional list of `drivingLicenses` that can be important for some jobs.
- A required `headline` titling your resume, indicating the position you are looking for.
- An optional `location` ([Location]()) where you live, or where you are looking for a job.
- A required `name` ([ProperNoun]()) composed of you given and family name.
- An optional list of `nationalities` ([CountryCode]()).
- An optional `picture` ([Url]()) of you.
- An optional list of `profiles` ([Profile]()) on social medias or any web platform you create content on.
- An optional `remote` boolean indicating whether you are OK to work remotely or not.
- An optional `summary` ([Summary]()) which is a kind of introduction that brings a bit of context about your current situation and what you are looking for.
- An optional personal `website` ([Url]()), online porfolio or whatever online content you would like to associate yourself to.

### Certificate 
Official credential that verifies you have successfully completed a course, training program, or examination that proves your knowledge or competency in a specific area.
[universal-resume](https://github.com/universal-resume) considere a Certificate defined as: 
- A required `date` ([Date]()) you obtained the Certificate.
- A required `issuer` ([Organization]()) that identify the organization, school or institution who issued the Certificate.
- A required `name` [ProperNoun]()  of the Certificate.
- An optional `summary` ([Summary]()) that brings a bit of context on this experience.
- An optional list of `tags` ([Tag]()) you want to explicitly associate to this experience.
- An optional `url` ([Url]()) refering to either the original document, or to the certificate page.

### Education 
Formal academic background and qualifications obtained from schools, colleges, universities, or other accredited institutions. It provides evidence of your foundational knowledge, field of study, and level of academic achievement.
[universal-resume](https://github.com/universal-resume) considere an Education defined as: 
- A required `area` which is the domain you learned on such as "Computer Sciences".
- An optional list of `courses` ([Course]()).
- An optional `endDate` ([Date]()) that you should provide except if this is your current situation.
- An optional `location` ([Location]()) where education happened.
- A required `organization` ([Organization]()) organization, school or institution that deliver the teaching.
- An optional `score`.
- A required `startDate` ([Date]()).
- A required `type` such as: "Bachelor", "Master", "PhD", etc.
- An optional `url` ([Url]()) refering to the institution or you specific learning program.

### Employment 
Paid jobs.
[universal-resume](https://github.com/universal-resume) considere an Employment defined as: 
- An optional `endDate` ([Date]()) that you should provide except if this is your current situation.
- An optional list of `highlight`([Highlight]()) indicating concrete achievements you want to bring attention to in the context of this experience.
- An optional `location` ([Location]()) where the employment happened.
- A required `organization` ([Organization]()) that identify the organization you worked for.
- A required `position` ([Position]()) defining the role you held in the organization or during the project your worked on.
- An optional list of `reference` ([Reference]()) from people your worked with.
- A required `startDate` ([Date]()).
- An optional `summary` ([Summary]()) that brings a bit of context on this experience.
- An optional list of `tags` ([Tag]()) you want to explicitly associate to this experience.
- A required `type` one of the following values `agency`, `apprenticeship`, `contract`, `freelance`, `internal`, `internship`.
- An optional `url` ([Url]()) refering to the organization or a project you worked on.

### Initiative 
Experiences you was not paid for
[universal-resume](https://github.com/universal-resume) considere an Employment defined as: 
- An optional `endDate` ([Date]()) that you should provide except if this is your current situation.
- An optional list of `highlight`([Highlight]()) indicating concrete achievements you want to bring attention to in the context of this experience. 
- An optional `location` ([Location]()) where the initiative happened 
- An optional `organization` ([Organization]()) that identify the organization or institution you worked for.
- A required `position` ([Position]()) defining the role you held in the organization or during the project your worked on.
- An optional list of `reference` ([Reference]()) from people your worked with.
- A required `startDate` ([Date]()).
- An optional `status` representing the current state of activity such as "Paused", "Active", "Archived", etc.
- An optional `summary` ([Summary]()) that brings a bit of context on this experience.
- An optional list of `tags` ([Tag]()) you want to explicitly associate to this experience.
- A required `type` one of the following values `civic`, `education`, `open-source`, `personal`, `research`, `startup`, `volunteering`.
- An optional `url` ([Url]) refering to the organization or a project you worked on.

### Interest 
[universal-resume](https://github.com/universal-resume) considere an Interest defined as: 
- A required `name`.
- An optional `summary` ([Summary]()) that brings a bit of details about this interest.
- An optional list of `tags` ([Tag]()) you want to explicitly associate to this interest.

### Language 
[universal-resume](https://github.com/universal-resume) considere a Language defined as: 
- An optional list of `certficates` ([Certificate]()).
- An optional `countryCode` ([CountryCode]()).
- An optional `fluency` one of the following values `bilingual`, `elementary`, `fluent`, `full-professional`, `limited-working`, `professional-working`.
- A required `name` ([ProperNoun]()).

### Publication
[universal-resume](https://github.com/universal-resume) considere a Publication defined as: 
- An optional list of `authors` ([ProperNoun]()).
- A required `date` ([Date]()).
- An optional `doi` for Digital Object Identifier.
- A required `name` ([ProperNoun]()).
- An optional `publisher` ([ProperNoun]).
- An optional `summary` ([Summary]()) that brings a bit of details about this publication.
- An optional list of `tags` ([Tag]()) you want to explicitly associate to this experience.
- A required `type` one of the following values `article`, `blog-post`, `book`, `conference`, `journal`, `presentation`, `thesis`, `report`, `webinar`, `whitepaper`.
- An optional `url` ([Url]()) refering to the publication.

### Skills
[universal-resume](https://github.com/universal-resume) considere a Skill defined as: 
- An optional `level`.
- A required `name`.
- An optional list of `tags` ([Tag]()) you want to explicitly associate to this skill.
- An optional number of `yearsOfExperience`.

## Base components
A bunch of reusable base components identified in the "$defs" section of the json-schema and refered from everywhere in the json-schema with "$ref".

### Date
A Date can represent an exact day in the `YYYY-MM-DD` format, a month in the `YYYY-MM`, or more approximately a year in the `YYYY` format.
Example: `2025-08-18`, `2024-02` or `2021`.

### ProperNoun
A proper noun is a word, or a couple of words that represents a person, a title, a place, an institution, etc. Each word is Capitalized.
Example: `John Doe`, `Paris`, `Apple` or `Google AI Research Certificate`.

### Url
A valid internet ressource identifier.
Example: `https://github.com/universal-resume`

### email
A valid lowecased email address.
Example: `john.doe@example.com`

### CountryCode
Country identifier in ISO 3166-1 alpha-2 format.
Example: `US`, `GB`, `FR`, `DE`.

### Summary
The summary of a section is a short amount of text that describes the context of the related experience and your role in this context.
Example: 

### Highlight
Concrete achievements you want to bring attention to in the context of the related experience.
Example: `Reduced deployment times from weeks to hours`.

### Tag
Short, unordered and not related with each others keyword that you want to associate with the related experience.
Example: `AI`, `Programming`, `Automation`, `Customer Support`.

### Position
Your position in the related experience, the role you held in the organization.
Example: `Software Engineer`, `Marketing Manager`.

### Location
The location of related experience, the place where it happened. It is supposed to be a city, a country, a region, etc.",
[universal-resume](https://github.com/universal-resume) considere a Location defined as: 
- An optional `address`.
- An optional `city` ([ProperNoun]()).
- An optional `countryCode` ([CountryCode]()).
- An optional `postalCode`.
- An optional `region` ([ProperNoun]()).

### Organization
The company or institution to which the related experience belongs.
[universal-resume](https://github.com/universal-resume) considere a Organization defined as: 
- A required `name` ([ProperNoun]()).
- An optional `location` ([Location]()).
- An optional `description`.

### Contact
Some ways to contact a person.
[universal-resume](https://github.com/universal-resume) considere a Contact defined as: 
- An optional `email` ([Email]()).
- An optional `phone`.
- An optional `linkedin` ([Url]()).

### Profile
Identifier on a specific social network or content creator platform.
[universal-resume](https://github.com/universal-resume) considere a Profile defined as: 
- A required `network` one of the following values `Github`, `Instagram`, `LinkedIn`, `Reddit`, `Tiktok`, `X`, `Twitch`, `X`, `Youtube`.

### Reference
[universal-resume](https://github.com/universal-resume) considere a Reference defined as: 
- An optional `contact` ([Contact]()) of the referer.
- A required `date` ([Date]()).
- A required `name` ([ProperNoun]()) of the referer.
- An optional `position` ([Position]()) of the referer.
- An optional `testamonial` from the referer.

### Course
Focus on a specific part of an education.
[universal-resume](https://github.com/universal-resume) considere a Course defined as: 
- A required `name`.
- An optional `summary`.
- An optional `format` such as `Online bootcamp`, `In-person`, etc.
