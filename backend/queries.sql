PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS tag_ads_ad;
DROP TABLE IF EXISTS AD;
DROP TABLE IF EXISTS Tag;
DROP TABLE IF EXISTS Category;


CREATE TABLE Category (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL
);

CREATE TABLE AD (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(250) NOT NULL,
    description TEXT NOT NULL,
    owner VARCHAR(250) NOT NULL,
    price INTEGER NOT NULL,
    date DATE NOT NULL,
    img TEXT,
    city VARCHAR(200) NOT NULL,
    CategoryId INTEGER NOT NULL,
    FOREIGN KEY (CategoryId) REFERENCES Category(id)
);


CREATE TABLE Tag (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    AD_id INTEGER NOT NULL
);

CREATE TABLE AD_Tag (
id INTEGER PRIMARY KEY AUTOINCREMENT,
ADId INTEGER NOT NULL,
TagId INTEGER NOT NULL,
FOREIN KEY (ADId) REFERENCES AD(id),
FOREIN KEY (TagId) REFERENCES Tag(id)
);


INSERT INTO Category (title) VALUES ('AUTRE'), ('Véhicules'), ('Hi-Fi');


INSERT INTO AD (title, description, owner, price, date, img, city, CategoryId) VALUES
('Vélo de course carbone', 'Vélo ultra léger en carbone, parfait pour les compétitions.', 'Jean Dupont', 1200, '2025-03-19', 'velo_carbone.jpg', 'Paris', 2),
('Chaise de bureau ergonomique', 'Chaise confortable en parfait état.', 'Alice Dupont', 80, '2025-03-15', 'chaise.jpg', 'Paris', 1),
('Lustre ancien', 'Lustre en cristal pour salon élégant.', 'Jean Martin', 200, '2025-09-01', 'lustre.jpg', 'Lyon', 1),
('Tapis berbère', 'Tapis fait main, authentique et neuf.', 'Sophie Morel', 150, '2025-03-13', 'tapis.jpg', 'Bordeaux', 1),
('Peugeot 208', 'Voiture récente, faible kilométrage.', 'Marc Lemoine', 12000, '2025-03-12', 'peugeot208.jpg', 'Bordeaux', 2),
('Scooter 125cc', 'Scooter en excellent état, toujours entretenu.', 'Lucas Perrin', 2500, '2025-03-11', 'scooter.jpg', 'Paris', 2),
('Vélo de course', 'Vélo léger, idéal pour cyclistes confirmés.', 'Élodie Richard', 900, '2025-03-10', 'velo.jpg', 'Lyon', 2),
('Amplificateur Yamaha', 'Ampli audio haute qualité, peu utilisé.', 'Nicolas Lefèvre', 350, '2025-09-01', 'ampli.jpg', 'Paris', 3),
('Casque Bluetooth Sony', 'Casque sans fil avec réduction de bruit.', 'Camille Bernard', 180, '2025-03-08', 'casque.jpg', 'Bordeaux', 3),
('Télévision 4K Samsung', 'Écran 55 pouces, excellente qualité d’image.', 'Laurent Dubois', 600, '2025-03-07', 'tv.jpg', 'Lyon', 3),
('Table basse scandinave', 'Table en bois massif, état neuf.', 'Julie Moreau', 120, '2025-03-06', 'table.jpg', 'Paris', 1),
('Toyota Yaris Hybride', 'Voiture éco, idéale en ville.', 'Pierre Fontaine', 14500, '2025-09-01', 'yaris.jpg', 'Bordeaux', 2),
('Moto Kawasaki Z650', 'Puissante et maniable, parfaite pour la route.', 'Antoine Rousseau', 5800, '2025-03-04', 'moto.jpg', 'Lyon', 2),
('Enceinte connectée Bose', 'Son puissant, connectivité Bluetooth et Wi-Fi.', 'Marion Lambert', 220, '2025-03-03', 'bose.jpg', 'Paris', 3),
('Appareil photo reflex Nikon', 'Idéal pour débutants et experts.', 'François Gérard', 750, '2025-03-02', 'nikon.jpg', 'Bordeaux', 3),
('Lampe de chevet moderne', 'Lampe design avec intensité réglable.', 'Céline Petit', 30, '2025-03-01', 'lampe.jpg', 'Lyon', 1),
('Volkswagen Golf GTI', 'Sportive et fiable, bien entretenue.', 'Bastien Leroy', 16500, '2025-09-01', 'golf.jpg', 'Paris', 2),
('Barre de son LG', 'Son immersif, parfait pour home cinéma.', 'Charlotte Henry', 280, '2025-02-28', 'barreson.jpg', 'Bordeaux', 3),
('Canapé en cuir', 'Grand canapé en cuir noir, excellent état.', 'Pauline Faure', 700, '2025-02-27', 'canape.jpg', 'Lyon', 1),
('Chargeur USB-C rapide', 'Chargeur ultra rapide pour smartphones.', 'Vincent Caron', 25, '2025-09-01', 'chargeur.jpg', 'Paris', 3);

INSERT INTO Tag (title) ('Neuf'), ('Soldé');
INSERT INTO AD_Tag (TagId, ADId) VALUES (1, 1);
INSERT INTO AD_Tag (TagId, ADId) VALUES (2, 1);


-- SELECT * FROM Ad;

-- SELECT * FROM Ad WHERE city = "Bordeaux";

-- DELETE FROM Ad WHERE price > 40;

-- UPDATE Ad SET price = 0 WHERE date = '2025-09-01';

-- SELECT AVG(price) FROM Ad WHERE city = 'Paris';

-- SELECT city, AVG(price) FROM Ad GROUP BY city;







