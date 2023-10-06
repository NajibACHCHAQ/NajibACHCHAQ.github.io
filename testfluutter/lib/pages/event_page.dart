import 'package:cloud_firestore/cloud_firestore.dart'; // Importe le package Firestore pour interagir avec Firebase Firestore.
import 'package:flutter/material.dart';
import 'package:intl/intl.dart'; // Importe le package Flutter Material, qui inclut les widgets d'interface utilisateur.

class EventPage extends StatefulWidget {
  const EventPage({super.key});

  @override
  State<EventPage> createState() => _EventPageState(); // Crée un état pour la page "EventPage".
}

class _EventPageState extends State<EventPage> {

  @override
  Widget build(BuildContext context) {
    return Center(
      child: StreamBuilder(
        stream: FirebaseFirestore.instance.collection('events').snapshots(), // Crée un flux (stream) pour surveiller la collection "events" de Firebase Firestore.
        builder: (BuildContext context, AsyncSnapshot<QuerySnapshot> snapshot) { // Utilise le widget StreamBuilder pour réagir aux mises à jour du flux Firestore.
          if (snapshot.connectionState == ConnectionState.waiting) { // Vérifie si la connexion au flux est en cours.
            return CircularProgressIndicator(); // Affiche une indication de chargement (cercle de progression) pendant le chargement initial.
          }

          if (snapshot.hasData) { // Vérifie si des données ont été reçues depuis Firestore.
            print('Nombre de documents Firestore : ${snapshot.data!.docs.length}'); // Affiche dans la console le nombre de documents Firestore reçus.
            // Reste du code pour la construction de la liste des événements.
          }
          List<dynamic> events =[];
          snapshot.data!.docs.forEach((element) { // Itère à travers les documents Firestore reçus.
            events.add(element); // Ajoute chaque document à la liste des événements.
          });
          return ListView.builder(
            itemCount: events.length, // Nombre d'éléments dans la liste des événements.
            itemBuilder: (context, index) { // Construit chaque élément de la liste.
              final event = events[index]; // Récupère un document d'événement spécifique depuis la liste.
              final avatar = event['avatar'].toString().toLowerCase(); // Récupère la valeur du champ 'avatar' du document.
              final speaker = event['speaker']; // Récupère la valeur du champ 'speaker' du document.
              final Timestamp timestamp  = event['date']; // Récupère la valeur du champ 'date' du document.
              final String date = DateFormat.yMd().add_jm().format(timestamp.toDate()); // formatage de la date
              final subject = event['subject']; // Récupère la valeur du champ 'subject' du document.

              // Construit un widget ListTile avec les détails de l'événement.
              return Card(
                child: ListTile(
                  leading: Image.asset("assets/images/$avatar.jpg"), // Affiche une image en fonction de la valeur du champ 'avatar'.
                  title: Text("$speaker ($date)"), // Affiche le nom du speaker suivi de la date.
                  subtitle: Text("$subject"), // Affiche le sujet de l'événement en tant que sous-titre.
                  trailing: Icon(Icons.info), // Affiche une icône "info" à droite de la liste.
                ),
              );
            },
          );
        },
      ),
    );
  }
}
