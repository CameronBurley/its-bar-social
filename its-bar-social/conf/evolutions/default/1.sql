# --- !Ups
CREATE TABLE places (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  address VARCHAR(255)
);

# --- !Downs
DROP TABLE places;