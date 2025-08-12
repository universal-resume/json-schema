import fs from "fs";
import { JSONSchema } from "effect";
import { Resume } from "@universal-resume/ts-schema";

const jsonSchema = JSONSchema.make(Resume.Schema)

fs.writeFileSync("schema.json", JSON.stringify(jsonSchema, null, 2))
