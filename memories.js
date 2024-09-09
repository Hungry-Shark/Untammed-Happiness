// Memory data
const memories = [
    {
      image: 'memories/memory1.jpg',
      heading:'Lady, the Senior Dog Who Found Her Forever Family',
      text: 'This is the first beautiful memory of Untammed Happiness.Samantha Parker, working at a veterinary clinic in Memphis, was asked to help with a rescue dog in terrible condition—a senior yellow Labrador named Lady. Lady had been neglected and left chained to a tree without proper shelter, food, or water after her original owner passed away. Despite her age and health issues, Parker decided to bring Lady home, where she quickly bonded with there children. Lady became particularly close with Parker’s daughter, Caroline, and even won over her son, who hadn’t liked dogs before. Lady’s resilience and loving nature transformed the entire family’s view on adopting senior dogs, showing that older pets can bring immense love and joy​.'
    },
    {
      image: 'memories/memory2.jpg',
      heading: 'Bear, the Rescued Dog Who Finally Found Love',
      text: 'Bear, a stray dog found on the streets of Lodi, California, had been attacked by another dog and left with injuries. He spent a long time in a shelter before being rescued by Wonder Dog Rescue in San Francisco, which hoped to find him a loving home. Michelle and Jonathan Lo decided to adopt Bear after meeting him at an adoption event. Initially, Bear was fearful and nervous due to his traumatic past, but with patience and love, he began to thrive in his new environment. Four months later, Bear was a happy and affectionate dog, grateful for his new life filled with care and kindness. His transformation underscored the impact of a loving home on a rescue dog’s well-being​.'
    },
    {
      image: 'memories/memory3.jpg',
      heading: 'Wiggie, the Therapy Dog Who Helped a Young Boy Heal',
      text: 'Seven-year-old Ty from San Rafael, California, was going through a difficult time after losing three family dogs and his grandmother. When Ty and his mother, Megan Penrose, began volunteering at a local dog rescue, they encountered a dog named Wiggie who was in despair after a tough start to life. Ty decided to foster Wiggie and cared for him tirelessly, helping him regain trust and health. The bond they formed was so strong that Wiggie became a permanent member of their family. Ty’s mother noted that Wiggie’s presence brought joy back into her son’s life, and they both healed together through the power of companionship.'
    },
    {
      image: 'memories/memory4.jpg',
      heading: 'Rescue from the Open Ocean',
      text: 'A group of friends boating off the coast of Florida found a dog struggling to stay afloat in the ocean without a life jacket. Realizing the urgency, they quickly maneuvered their boat to pull the exhausted dog to safety. The dog was then reunited with his grateful family, who had been searching for him after he went missing. This story reminds us of the unpredictable situations pets can find themselves in and the incredible kindness of strangers who step in to help.'
    },
    {
      image: 'memories/memory5.jpg',
      heading: 'Gremmy’s Journey from Trauma to Triumph,Gremmy',
      text: 'A dog rescued from a puppy mill by the National Mill Dog Rescue, was in a severely neglected state. He had suffered years of abuse and was in poor health. However, with dedicated care from his foster family, Gremmy’s transformation was incredible. He regained his trust in humans and began to live a life filled with joy and love. His foster family, deeply moved by his resilience, decided to honor his memory by raising funds and dedicating a kennel to him, ensuring his story inspires others to rescue and care for animals in need.'
    },
    {
      image: 'memories/memory6.jpg',
      heading: 'Mia’s Miraculous Rescue',
      text: 'Mia, a dog trapped in an abandoned building, was saved by a determined rescuer who saw her through a small opening. The rescue was a race against time as the building was at risk of collapsing. The team carefully maneuvered through the debris, working tirelessly to free Mia. When they finally reached her, she was scared but unharmed. Mia was soon adopted by a loving family, and she has since become an affectionate and playful companion, showing immense gratitude for her second chance at life.'
    }
  ];
  
  // Function to change the carousel content when an image is clicked
  function changeMemory(index) {
    const carouselSection = document.getElementById('memories-carousel');
    const heading = document.getElementById('carousel-heading');
    const text = document.getElementById('carousel-text');
  
    // Change the background image, heading, and text
    carouselSection.style.backgroundImage = `url('${memories[index].image}')`;
    heading.textContent = memories[index].heading;
    text.textContent = memories[index].text;
  }
  