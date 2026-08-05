---
title: 'Koddan Önce Gelen Şey: Kavramsal Tasarım'
date: '2026-07-25'
author: 'Resul Çalışkan'
description: "Fred Brooks'un yazılım geliştirmedeki en önemli fikirlerinden biri olan kavramsal tasarım ve Conceptual Integrity üzerine."
---

Bir yazılım projesi neden karmaşıklaşır?

İlk akla gelen cevaplar genellikle şunlardır:

- Kod kalitesi
- Yanlış mimari
- Teknik borç
- Performans sorunları

Bunların hepsi önemlidir.

Fakat Fred Brooks, bunlardan daha temel bir probleme dikkat çeker:

> Bir projenin en önemli kararı, ilk satır kod yazılmadan önce verilir.

Bu kararın adı **kavramsal tasarım**dır.

## Kavramsal Tasarım Nedir?

Kavramsal tasarım, bir ürünün nasıl kodlanacağını değil, **nasıl düşünülmesi gerektiğini** belirler.

Başka bir ifadeyle şu soruların cevabıdır:

- Bu ürünün temel amacı nedir?
- Kullanıcı bu ürünü nasıl algılamalı?
- Sistemin kullandığı dil ve kavramlar neler olacak?
- Hangi özellikler gerçekten gerekli?
- Hangileri bilinçli olarak dışarıda bırakılacak?

Kod zamanla değişebilir.

Teknolojiler değişebilir.

Fakat doğru oluşturulmuş bir kavramsal tasarım, ürünün kimliğini korumaya devam eder.

## Conceptual Integrity

Fred Brooks'un en meşhur cümlesi şudur:

> Conceptual Integrity is the most important consideration in system design.

Türkçesiyle:

> Bir sistem tasarlanırken en önemli unsur kavramsal bütünlüktür.

Kullanıcı ürünün herhangi bir yerine baktığında aynı düşünceyi hissedebilmelidir.

Aynı tasarım dili...

Aynı mantık...

Aynı kullanım deneyimi...

Ürün onlarca kişi tarafından geliştirilmiş olsa bile, tek bir kişinin tasarladığı hissini vermelidir.

## Karmaşıklığın Gerçek Sebebi

Çoğu zaman projeler kod yüzünden karmaşıklaşmaz.

Farklı insanların aynı ürünü farklı şekillerde hayal etmesi yüzünden karmaşıklaşır.

Bir geliştirici ürünü görev yönetim aracı olarak görür.

Diğeri sosyal platform gibi düşünür.

Bir başkası ise yapay zekâ özellikleri eklemek ister.

Her fikir tek başına mantıklıdır.

Ancak hepsi bir araya geldiğinde ürün kendi kimliğini kaybetmeye başlar.

İşte kavramsal tasarımın amacı tam olarak bunu engellemektir.

## Her Özellik Değer Katmaz

Yeni özellik eklemek çoğu zaman ilerleme gibi görünür.

Fakat bazen asıl ilerleme, gereksiz özellikleri eklememektir.

İyi tasarım her isteğe "evet" demek değildir.

Asıl zor olan, hangi fikirlere "hayır" deneceğini bilmektir.

Çünkü eklenen her yeni özellik, ürünün kavramsal bütünlüğünü bozma riski taşır.

## Sonuç

Fred Brooks'un bana göre en önemli mesajı şu:

Yazılım geliştirmek sadece kod yazmak değildir.

Önce düşünmek gerekir.

Ürünün ne olduğunu netleştirmek gerekir.

Sonra o fikri baştan sona aynı anlayışla geliştirmek gerekir.

> Belki de iyi yazılımın temeli, iyi kod değil; iyi tasarlanmış bir fikirdir.