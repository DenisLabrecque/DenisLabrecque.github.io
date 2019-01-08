---
layout: post
title: Planetary gravity in Unity
subtitle: Unity Script
headline: This C# script allows creating a gravity zone for any Rigidbody object. With one simple script, any object can be attracted to a planet.
hero-image: https://i.pinimg.com/originals/f0/e2/86/f0e2860744a3a6af140bf40af26275f7.png
ref: graviteunity
categories: blog
tags: Unity C# tutorial gravity force Rigidbody
lang: en
---
In Unity, it is simple to add gravity when a single ```gameObject``` manages is. That is why a ```Collider``` with ```isTrigger``` checked as ```true``` must be used. Any object in this region will be affected by gravity.

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

This code can be used for anything as long as Denis Labrecque is appropriately credited.