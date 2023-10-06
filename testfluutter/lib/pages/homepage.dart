import 'package:flutter/material.dart';
import 'event_page.dart';
class HomePage extends StatelessWidget {
  const HomePage({
    super.key,
  });
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Image.asset("assets/images/pcimg.png"),
          const Text("Bienvenue sur CDA Greta",
            style: TextStyle(
                fontSize: 48,
                fontFamily: 'Poppins'
            ),
            textAlign: TextAlign.center,
          ),
          const Text("Formation CDA Greta 2023/2024",
            style: TextStyle(
              fontSize: 24,
            ),
            textAlign: TextAlign.center,
          ),
          const Padding(padding: EdgeInsets.only(top:20)),
        ],
      ),
    );
  }
}