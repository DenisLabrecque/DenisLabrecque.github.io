---
layout: post
title: Unity camera system
subtitle: Unity Script
headline: This C# script allows cameras to be attached easily and have certain characteristics by default.
hero-image: https://i.pinimg.com/originals/f0/e2/86/f0e2860744a3a6af140bf40af26275f7.png
ref: unitycamerasystem
categories: blog
tags: Unity C# tutorial camera
lang: en
---
There are many problems with using multiple cameras in Unity, such as having multiple audio listeners and multiple camera settings to deal with. Having a single scene camera that can be invoked from anywhere is extremely practical. It ensures that only one camera is filming and receiving audio at any time, and equalizes settings like field of view.

How will a single camera exhibit multiple movement types, like being static, following a vehicle, or any other movement that a game camera usually switches between? This is easily accomplished by attaching the camera to an object that itself has the desired movement characteristic.

{% highlight csharp %}
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// Define a camera position inherited as static, inside, or follow, etc.
/// </summary>
public abstract class CameraEmplacement : MonoBehaviour {

   #region Properties

   [SerializeField] int m_FieldOfView = 80;

   protected Camera m_Camera = null;

   #endregion


   #region Public Methods

   /// <summary>
   /// Attach a camera to this emplacement.
   /// </summary>
   public void Attach(Camera camera)
   {
      // Activate this camera emplacement
      enabled = true;
      m_Camera = camera;

      // Attach the camera to this object
      camera.transform.parent = transform;

      // Set the camera's properties to match the emplacement's
      MatchEmplacementProperties(camera);
   }

   // Deactivate this camera emplacement
   public void Detach()
   {
      m_Camera = null;
      enabled = false;
   }

   #endregion


   #region Private Methods

   /// <summary>
   /// Ensure that camera FOV and other properties are matched to those defined in this class.
   /// </summary>
   public virtual void MatchEmplacementProperties(Camera camera)
   {
      // Set the camera's position to this object
      camera.transform.localPosition = Vector3.zero;

      // Set the camera's rotation to that of this object
      camera.transform.localRotation = transform.localRotation;

      // FOV
      camera.fieldOfView = m_FieldOfView;
   }

   #endregion
}
{% endhighlight %}