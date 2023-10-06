import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:date_field/date_field.dart';

class AddEventPage extends StatefulWidget {
  const AddEventPage({super.key});

  @override
  State<AddEventPage> createState() => _AddEventPageState();
}

class _AddEventPageState extends State<AddEventPage> {
  // permet de stocker le statut du formulaire enregistre chaque champ
  final _formkey = GlobalKey<FormState>();
  final confNameController = TextEditingController();
  final speakerNameController = TextEditingController();
  String selectedConfType = 'cours';
  DateTime selectedConfDate = DateTime.now();

  @override
  void dispose(){
    super.dispose();
    confNameController.dispose();
    speakerNameController.dispose();


  }
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.all(20),
      child: Form(
        key: _formkey,
        child: Column(
          children: [
            TextFormField(
              decoration: const InputDecoration(
                labelText: ' Nom du cours',
                hintText: ' Entrer le nom du cours',
                  border:OutlineInputBorder()
              ),
              validator:(value){
                if(value == null || value.isEmpty){
                  return "Complétez les infos";
                }
                return null;
              } ,
                controller:confNameController,
            ),
            // Marge apres le formulaire, possible de mettre le form
            // dans un container et de cree une marge
            SizedBox(height: 20),
            // Champ de formulaire
            TextFormField(
              decoration: const InputDecoration(
                  labelText: " Intervenant",
                  hintText: "Entrer le nom de l'intervenant",
                  border:OutlineInputBorder()
              ),
              // Creation d'un test de champ null ou vide
              validator:(value){
                if(value == null || value.isEmpty){
                  return "Complétez les infos";
                }
                return null;
              } ,
              controller:speakerNameController,
            ),
            SizedBox(height: 20),
            DropdownButtonFormField(
                decoration: const InputDecoration(
                    border:OutlineInputBorder()
                ),
                items: const [
                  // Définition des options du dropdown
                  DropdownMenuItem(value:'cours' ,child:Text("Cours")),
                  DropdownMenuItem(value:'TD' ,child:Text("TD")),
                  DropdownMenuItem(value:'présentation' ,child:Text("Présentation")),
                ],
                value: selectedConfType,
                onChanged: (value){
                  setState(() {
                    selectedConfType = value!;
                  });
                }
            ),
            SizedBox(height: 20),
            DateTimeFormField(
              decoration: const InputDecoration(
                hintStyle: TextStyle(color: Colors.black45),
                errorStyle: TextStyle(color: Colors.redAccent),
                border: OutlineInputBorder(),
                suffixIcon: Icon(Icons.event_note),
                labelText: 'Selectionnez une date',
              ),
              firstDate: DateTime.now().add(const Duration(days: 10)),
              lastDate: DateTime.now().add(const Duration(days: 40)),
              initialDate: DateTime.now().add(const Duration(days: 20)),
              autovalidateMode: AutovalidateMode.always,
              validator: (DateTime? e) =>
              (e?.day ?? 0) == 1 ? 'Please not the first day' : null,
              onDateSelected: (DateTime value) {
                setState(() {
                  selectedConfDate = value;
                });
              },
            ),
            SizedBox(height: 20),
            SizedBox(
              width: double.infinity,
              height: 50,
              child: ElevatedButton(
                  onPressed: (){
                    // Au click si le statut est valider on cree une barre
                    if(_formkey.currentState!.validate()){
                      final confName = confNameController.text;
                      final speakerName = speakerNameController.text;
                      ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(content:Text('envoi en cours'))
                      );
                      // Permet la fermeture du clavier sur mobil apres validation du foorm
                      FocusScope.of(context).requestFocus(FocusNode());
                      print('Ajout de la session $confName donné par $speakerName');
                      print("Le type de cours enregistrer est $selectedConfType");
                      print('Date du cours $selectedConfDate');
                      //Permet l'acces au donnée fire de la collection
                      CollectionReference eventsRef = FirebaseFirestore.instance.collection('events');
                      // Ajouter data a la base via eventRef
                      eventsRef.add({
                        'speaker':speakerName,
                        'date':selectedConfDate,
                        'subject':confName,
                        'avatar':'me',
                        'type': selectedConfType
                      });
                    }
                  },
                  child:  Text('Envoi')
              ),
            )
          ],
        ),
      ),
    );
  }
}

