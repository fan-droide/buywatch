CREATE TABLE tvseries (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  price FLOAT NOT NULL,
  copyright_holder_webid VARCHAR(255) NOT NULL
);

ALTER TABLE tvepisodes ADD COLUMN tvserie_id INTEGER REFERENCES tvseries(id);