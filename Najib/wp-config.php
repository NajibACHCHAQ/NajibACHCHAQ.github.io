<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link https://fr.wordpress.org/support/article/editing-wp-config-php/ Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'najib' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', '' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost:3306' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'cU4#}sA]i2,. E[i43D!,S14(S.Xp2!!t.7uDX+[r[ AP+Thw$W%Q,5ej|`QPgXR' );
define( 'SECURE_AUTH_KEY',  'PAMrpF2Cx|FU7?$Qlwm*2QEK>a1(taCE8e._(&.W2(oB|m/R:EE{;B93|Cq{_Y[u' );
define( 'LOGGED_IN_KEY',    '.|Om4xGCq&-1PX,:1xFG<YaA8Kor[yi?9=W*<eB)F$`/]s(2|HimFv3<C?vQOEY!' );
define( 'NONCE_KEY',        's5&pew.D.Ygjp8+&=_c?w8:k2.d@;yP^jT5Eeo[8?Pf+PC5o>H?K.9vH.0(a0u2-' );
define( 'AUTH_SALT',        'E.Bn,S9 D+@61Z}BL){8TJ>G2.T3JY>5/vXQ-<yj<FMd,wn13{V+gYqr*((@uaWP' );
define( 'SECURE_AUTH_SALT', 'nI[>MfAdBUCRJ@+v(>VE7LoAJq+&5#I=yeBpbZ%kr8:$o?9n,LbnZ~nP#x$!$r8u' );
define( 'LOGGED_IN_SALT',   '9c.;(T3~V&u14g!:EnWdG?c=tF?^bs0Wv%EwE0AnNo<yY1w=71r{:EXF|di+rj=G' );
define( 'NONCE_SALT',       'WaTJT)^}q~3z-%(l9Q9:v]D>F7?3qCgzIV)<jDm2[Y+KmO`O>=>c2n1p|t+=DLN,' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs et développeuses : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs et développeuses d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur la documentation.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
