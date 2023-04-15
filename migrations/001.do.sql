CREATE TABLE tvepisodes (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  episode_number INTEGER NOT NULL,
  creative_work_season INTEGER NOT NULL,
  price FLOAT NOT NULL,
  copyright_holder_webid VARCHAR(255) NOT NULL,
  date_published DATETIME DEFAULT CURRENT_TIMESTAMP
);