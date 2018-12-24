---
layout: post
title: Gravité planétaire dans Unity
subtitle: Script Unity
headline: Ce script C# permet de créer une zone de gravité visuelle pour tout objet rigidbody. Avec un seul script facile, vous pourrez attirer n'importe quel objet à une planète.
hero-image: https://i.pinimg.com/originals/f0/e2/86/f0e2860744a3a6af140bf40af26275f7.png
ref: graviteunity
categories: blogue
tags: Unity C# tutoriel gravité force Rigidbody
lang: fr
---
Dans Unity, il est simple d’ajouter de la gravité quand un seul objet la gère. C’est pourquoi il faut utiliser une ```Collider``` dont la case ```isTrigger``` a été cochée. Tout objet dans cette région sera affectée par la gravité.

Voici mon tutoriel sur comment écrire et utiliser ce code :

<iframe width="560" height="315" src="https://www.youtube.com/embed/AX5E0VExGog" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Le code dans la vidéo se trouve ci-bas :

{% highlight csharp %}
using UnityEngine;

/// <summary>
/// Attire tout objet ayant une Rigidbody vers celui-ci.
/// La GameObject doit avoir une SphereCollider avec isTrigger = true.
/// La GameObject doit avoir une GameObject avec un autre SphereCollider.
/// Pour élargir la région gravitationnelle, changer le rayon de la SphereCollider [isTrigger = true]
/// Denis Labrecque, Décembre 2018
/// Attribution 4.0 International
/// </summary>
[RequireComponent(typeof(SphereCollider))]
public class Gravite : MonoBehaviour
{
   [SerializeField] float m_ForceGravitionelle = 30.0f;
   SphereCollider m_RegionGravitionelle; // Région dans laquelle tout GameObject avec Rigidbody sera attiré vers la planète
   SphereCollider m_Terre; // SphereCollider qui représente la surface de la planète
   float m_DistanceDattraction;
   
   void Awake()
   {
      m_RegionGravitionelle = GetComponent<SphereCollider>();
      m_RegionGravitionelle.isTrigger = true;
      m_Terre = GetComponentInChildren<SphereCollider>();
      m_DistanceDattraction = m_RegionGravitionelle.radius - m_Terre.radius;
   }

   /// <summary>
   /// Les calculs gravitationnels se font ici.
   /// </summary>
   /// <param name="other">Collider de l'objet qui est entré dans la région gravitationnelle.</param>
   void OnTriggerStay(Collider other)
   {
      if(other.attachedRigidbody)
      {
         float intensite = Vector3.Distance(transform.position, other.transform.position) / m_RegionGravitionelle.radius;

         other.attachedRigidbody.AddForce((transform.position - other.transform.position) * intensite * m_ForceGravitionelle * Time.deltaTime);

         Debug.DrawRay(other.transform.position, transform.position - other.transform.position);
      }
   }
}

{% endhighlight %}

Ce code peut être utilisé pour toute application tant que Denis Labrecque est crédité de façon appropriée.