CREATE TABLE "students" (
  "id" SERIAL PRIMARY KEY,
  "full_name" VARCHAR,
  "school" VARCHAR,
  "grade" INT,
  "total_points" INT
);

CREATE TABLE "teachers" (
  "id" SERIAL PRIMARY KEY,
  "full_name" VARCHAR,
  "school" VARCHAR
);

CREATE TABLE "assignments" (
  "id" SERIAL PRIMARY KEY,
  "assignment_name" VARCHAR,
  "assignment_details" VARCHAR,
  "due_date" TIMESTAMP,
  "assignment_points" INT,
  "class_id" INT
);

CREATE TABLE "assignment_delegation" (
  "assignment_id" INT,
  "student_id" INT,
  "status" VARCHAR,
  PRIMARY KEY ("assignment_id", "student_id")
);

CREATE TABLE "classes" (
  "id" SERIAL PRIMARY KEY,
  "class_name" VARCHAR,
  "class_code" VARCHAR,
  "class_colour" VARCHAR,
  "total_points" INT,
  "teacher_id" INT
);

CREATE TABLE "student_class_items" (
  "student_id" INT,
  "class_id" INT,
  PRIMARY KEY ("student_id", "class_id")
);

ALTER TABLE "assignment_delegation" ADD FOREIGN KEY ("assignment_id") REFERENCES "assignments" ("id");

ALTER TABLE "assignment_delegation" ADD FOREIGN KEY ("student_id") REFERENCES "students" ("id");

ALTER TABLE "assignments" ADD FOREIGN KEY ("class_id") REFERENCES "classes" ("id");

ALTER TABLE "student_class_items" ADD FOREIGN KEY ("student_id") REFERENCES "students" ("id");

ALTER TABLE "student_class_items" ADD FOREIGN KEY ("class_id") REFERENCES "classes" ("id");

ALTER TABLE "classes" ADD FOREIGN KEY ("teacher_id") REFERENCES "teachers" ("id");