![Trek12_Present](Source/images/Trek12_present.jpg)

<div align = center>

---
&nbsp; ![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white)
&nbsp; ![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
&nbsp; ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
&nbsp; ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

---

</div>


# Trek12

Le but de cette SAE sera de développer un jeu (Trek12) multi-joueurs non temps-réel en réseau (à travers code first) pour mobile et/ou web.

## Contexte

**Trek12** est un jeu de type Roll & Write créé par Bruno Cathala et Corentin Lebrat.  
Il peut être joué à plusieurs, chaque joueur possède une fiche comme celle ci-dessous.  
Une partie est faite de 19 tours.  
Un lancer de deux dés est réalisé (le même pour tous les joueurs) à chaque tour : les deux possèdent 6 faces, mais le premier va de 0 à 5 et le deuxième de 1 à 6.  
Chaque joueur peut choisir l'une des opérations suivantes :
- prendre la plus petite valeur des deux dés,
- prendre la plus grande valeur des deux dés,  
- faire la soustraction des deux dés,
- faire l'addition des deux dés,
- faire le produit des deux dés.  
  
Attention, chaque opération ne peut être utilisée que 4 fois pendant une partie.  
Les valeurs obtenues sont ensuite placées dans les cercles ci-dessous et doivent être adjacentes à un cercle déjà rempli (sauf pour le premier lancer bien sûr).  
Le joueur doit ensuite relier un maximum de cases de mêmes valeurs (*blocs*) ou relier des cases dont les valeurs se suivent (*chaîne*) pour faire des points.  
Il peut ensuite prendre des points supplémentaires (bloc le plus grand, chaîne la plus longue...) ou en perdre (cases isolées...).  
Le joueur ayant fait le plus de points gagne la partie.  

![Trek 12](Source/images/trek12-lelabodesjeux-rollandwrite-lumberjackstudios-3.jpg)

Le jeu est intéressant pour de jeunes joueurs car il nécessite du calcul mental, de la logique, de l'anticipation, et présente les statistiques. Pour ces raisons, je souhaite que les calculs ne soient pas faits automatiquement mais seulement vérifiés, pour que les enfants continuent à faire leurs calculs eux-mêmes.  

## Que faut-il faire ?

L'objectif du projet est de rendre ce jeu utilisable par des jeunes à travers une application mobile (et web ?) et de permettre le jeu en réseau. Il s'agit donc d'un jeu multi-joueurs en réseau, mais non temps-réel. Il faut attendre le choix de chaque joueur pour passer au tour suivant, mais le temps n'a pas d'importance.  
Les technologies seront choisies en accord avec le tuteur.  

## Extensions possibles
- un tchat
- le stockage des résultats des parties et le classement des meilleurs joueurs.

## Diagramme de classes

[![](https://mermaid.ink/img/pako:eNqNVs1u4zYQfhVCFzuw3WJ7FIwAWe-ia9Q_AZxkd1P3QEvjhF2K1JJUEDfNu_TYPIdfbGcoWT-M3VQHUZz5OP8z1FOU6BSiOEokt_aD4HeGZ2vF8PEUdin5Dgx7Kmn0jKZpzIRyLcqCZxCzlTNC3ZXk57VqS_kVAUckrRJtIBR2CYpLJ8AGjEEueQI3XBbQT0DKmE3wPWQPRPHYs5httJbA1UF7aIYRadcA8Veof8DTlAS3dLTl1jADmX6AN5CBfoJ09H8Jnf8aEm5q705KvNrl0BI6HoMqMjDcCa3OzxvG9eK3xfLzoiFMPl1MW9vb5eJjs3u_vPp0VOUyr2T_H52Xs-tVs5tPF53txZebi9n1xw4gpFzPrqaXs6-1KbScMGjOFb_rlth4zDfWGZ64tlWj-sgHkbiYZTwfj2vakKLdgU-4TAp5HLstVHIAh8mht0ieTlTjynFnO-UwuedChXU_utXqVTOM5vzRo8P6ODDp0FHeYuMbMT3Zpx2Lyqa1ldvlbthq506YPgulwMTVzGgxMHKlMe-8NewY65ewD42WFHLon4UcBY_uqjCqj-Rh1fgPWqRBjXTdmuOce7syBkIJJ7jEudCvpf5Xco-JPiqkI6I1D0ej83IuxWxAawUgCrEmfrYMaLG__1Ey_Rg5MKn7EeBwKbktub7CkEmrsE58L8CWIKUdsK02ZcbX0QxYiuWNFa24MMB6VeJ7DKxjhepw1yjjeyFY4YQUFk-CZTkxDtfFz41_hM11YeiFgTBsI0AxiVAMn04EIqImJt7q8iCaXdkQsBvZIaR26tVE8A6-w4-OkxaMY_t_mHU6-YZMCSgi25QOpj2d719KMZahb44rR2ZLbSy6DwS3kGiVekF0pi2LY8sosf_XUHxY4icI0pN7TmcJ3cgf0knZ4yL14K1WSamWK612GSYN4f2GnBu8I7GPUige2RQ_MKSgnNm_AANvCQJSQmDmqD9-YssyDYYLV7nA_9SFo9hQhmRhBRRIzfQOUEPbZEpWKxaER31bLixpEFku9y8Zqqed7KE6MFu8qVGGj6PYbvEs-OAdQmLbSW8VbJi4qt7LVkPE36cgVXXUnf52QRy5A_rdK-DMhyYc_v1g9p8dXAkHgre2a88rMzo-03CIhhFeoxlWAv6T-ZGyjtw9ZLCOYvxMuflG-p4RxwunVzuVRPGWSwvDqMhT7qD6h6upkAqnzbz6y6NlGOVc3Wp9wDz_AAdcMTA?type=png)](https://mermaid.live/edit#pako:eNqNVs1u4zYQfhVCFzuw3WJ7FIwAWe-ia9Q_AZxkd1P3QEvjhF2K1JJUEDfNu_TYPIdfbGcoWT-M3VQHUZz5OP8z1FOU6BSiOEokt_aD4HeGZ2vF8PEUdin5Dgx7Kmn0jKZpzIRyLcqCZxCzlTNC3ZXk57VqS_kVAUckrRJtIBR2CYpLJ8AGjEEueQI3XBbQT0DKmE3wPWQPRPHYs5httJbA1UF7aIYRadcA8Veof8DTlAS3dLTl1jADmX6AN5CBfoJ09H8Jnf8aEm5q705KvNrl0BI6HoMqMjDcCa3OzxvG9eK3xfLzoiFMPl1MW9vb5eJjs3u_vPp0VOUyr2T_H52Xs-tVs5tPF53txZebi9n1xw4gpFzPrqaXs6-1KbScMGjOFb_rlth4zDfWGZ64tlWj-sgHkbiYZTwfj2vakKLdgU-4TAp5HLstVHIAh8mht0ieTlTjynFnO-UwuedChXU_utXqVTOM5vzRo8P6ODDp0FHeYuMbMT3Zpx2Lyqa1ldvlbthq506YPgulwMTVzGgxMHKlMe-8NewY65ewD42WFHLon4UcBY_uqjCqj-Rh1fgPWqRBjXTdmuOce7syBkIJJ7jEudCvpf5Xco-JPiqkI6I1D0ej83IuxWxAawUgCrEmfrYMaLG__1Ey_Rg5MKn7EeBwKbktub7CkEmrsE58L8CWIKUdsK02ZcbX0QxYiuWNFa24MMB6VeJ7DKxjhepw1yjjeyFY4YQUFk-CZTkxDtfFz41_hM11YeiFgTBsI0AxiVAMn04EIqImJt7q8iCaXdkQsBvZIaR26tVE8A6-w4-OkxaMY_t_mHU6-YZMCSgi25QOpj2d719KMZahb44rR2ZLbSy6DwS3kGiVekF0pi2LY8sosf_XUHxY4icI0pN7TmcJ3cgf0knZ4yL14K1WSamWK612GSYN4f2GnBu8I7GPUige2RQ_MKSgnNm_AANvCQJSQmDmqD9-YssyDYYLV7nA_9SFo9hQhmRhBRRIzfQOUEPbZEpWKxaER31bLixpEFku9y8Zqqed7KE6MFu8qVGGj6PYbvEs-OAdQmLbSW8VbJi4qt7LVkPE36cgVXXUnf52QRy5A_rdK-DMhyYc_v1g9p8dXAkHgre2a88rMzo-03CIhhFeoxlWAv6T-ZGyjtw9ZLCOYvxMuflG-p4RxwunVzuVRPGWSwvDqMhT7qD6h6upkAqnzbz6y6NlGOVc3Wp9wDz_AAdcMTA)