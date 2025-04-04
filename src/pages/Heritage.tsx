import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

export default function Heritage() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end end"]
  });

  const timelineItems = [
    {
      year: "1505",
      title: "MAN SINGH PALACE",
      description: "Construction of the magnificent Man Singh Palace begins, showcasing the grandeur of Gwalior architecture.The Man Singh Palace, built between 1486 and 1516 by Raja Man Singh Tomar, is a masterpiece of Rajput and early Mughal architecture, located within Gwalior Fort. Its vibrant blue, yellow, and green tile work and intricate carvings of peacocks and elephants make it a visual delight. The palace has four levels, including underground chambers designed for cooling and security. It holds historical significance as the site of the Jauhar Kund, where Rajput women committed self-immolation after Man Singh's defeat by Babur. The palace later served as a prison for Mughal and British rulers, where Aurangzeb imprisoned and executed his brother Murad Baksh. Its strategic design includes secret tunnels and chambers, showcasing the advanced engineering of the time. Today, this architectural gem stands as a symbol of Gwalior’s rich history and royal legacy.",
      image: "jai-vilas-palace.jpg"
    },
    {
      year: "1516",
      title: "GUJARI MAHAL",
      description: "The beautiful Gujari Mahal is completed as a monument of love by Raja Man Singh for his queen Mrignayani. The Gujari Mahal, built in the 15th century by Raja Man Singh Tomar, is a remarkable palace located within Gwalior Fort. It was constructed as a symbol of his love for Queen Mrignayani, a brave and intelligent Gujar princess who demanded a separate palace with a constant water supply from the Rai River. The palace exhibits a unique blend of Rajput and early Mughal architecture, with intricate stone carvings, grand arches, and artistic sculptures. Although much of the structure is in ruins, its sturdy walls and elegant design still reflect the grandeur of that era. Today, Gujari Mahal has been converted into an Archaeological Museum, housing a rich collection of sculptures, inscriptions, coins, weapons, and rare artifacts from different periods. Among its most prized possessions is the 10th-century Lord Vishnu statue, along with various relics from the Gupta and Kachchhapaghata dynasties. The museum also showcases terracotta items, miniature idols, and ancient manuscripts, offering valuable insights into India’s historical and cultural heritage. As a symbol of royal love and architectural brilliance, Gujari Mahal continues to attract history enthusiasts and tourists from all over the world.",
      image: "gujari-mahal-pic.jpg"
    },
    {
      year: "1665",
      title: "TELI KA MANDIR",
      description: "Teli ka Mandir, located within Gwalior Fort in Madhya Pradesh, India, is an architectural marvel dating back to the 8th or 9th century CE. Standing approximately 100 feet tall, it is the tallest structure within the fort complex. The temple uniquely blends Dravidian and Nagara architectural styles, featuring a rectangular sanctum topped with a distinctive barrel-vaulted roof reminiscent of South Indian gopurams. The exterior walls are adorned with intricate carvings of coiled serpents, river goddesses, and a prominent image of Garuda above the doorway. Originally dedicated to Lord Vishnu, the temple has also been associated with Lord Shiva and the Matrikas over time. The name Teli ka Mandir, translating to Oilman's Temple, is believed to originate from legends suggesting its construction was funded by oil merchants. Despite suffering damage during historical invasions, the temple underwent restoration in the 19th century under British supervision. Today, it stands as a testament to India's rich cultural and architectural heritage, attracting numerous tourists and historians alike.​",
      image: "teli-ka-mandir.jpg"
    },
    {
      year: "1800s",
      title: "BRITISH ERA",
      description: "Gwalior becomes a significant incely state during the British Raj, preserving its cultural heritage. The British Era in India (1858-1947) marked a significant period of colonial rule under the British Crown, following the end of the East India Company’s rule after the Revolt of 1857. During this time, India underwent major political, social, and economic changes. The British introduced modern administration, railways, telegraph, Western education, and legal systems, but also imposed heavy taxes, economic exploitation, and racial discrimination. The period saw widespread resistance through movements like the Swadeshi Movement, Non-Cooperation Movement, Civil Disobedience Movement, and Quit India Movement, led by leaders such as Mahatma Gandhi, Subhas Chandra Bose, Jawaharlal Nehru, and Bhagat Singh. The British also introduced divide and rule policies, leading to Hindu-Muslim tensions and ultimately the Partition of India in 1947, resulting in the creation of India and Pakistan. Despite the hardships, the British era laid the foundation for modern infrastructure, institutions, and governance in independent India.",
      image: "british-era.jpg"
    },
    {
      year: "1025",
      title: "GWALIOR FORT",
      description: "Gwalior Fort, perched atop a sandstone hill in Madhya Pradesh, India, has a history spanning over a millennium. Its origins are believed to date back to the 6th century, with significant contributions from various dynasties, including the Tomars, Mughals, and Marathas. The fort is renowned for its formidable architecture, featuring massive sandstone walls that enclose several palaces, temples, and water tanks. Notable structures within the fort include the Man Singh Palace, known for its intricate tile work and vibrant blue mosaics, and the Gujari Mahal, now a museum housing archaeological artifacts. The fort also contains ancient rock-cut temples and the iconic Teli Ka Mandir, showcasing a blend of architectural styles. Mughal Emperor Babur once referred to Gwalior Fort as the pearl amongst fortresses in India, highlighting its strategic importance and grandeur. Today, it stands as a testament to India's rich historical and architectural heritage, attracting numerous visitors and historians. ",
      image: "Gwalior-Fort.jpg"
    },
    {
      year: "1820",
      title: "SAS BAHU TEMPLE",
      description: "The Saas-Bahu Temple, also known as Sahastrabahu Temple, is a pair of intricately carved temples situated within the Gwalior Fort complex. Constructed in 1093 AD by King Mahipala of the Kachchhapaghata dynasty, these temples were originally dedicated to Lord Vishnu. The name Saas-Bahu translates to Mother-in-law and Daughter-in-law, stemming from a local legend that one temple was built for the king's wife and the other for his daughter-in-law. The larger temple (Saas) features a pyramidal structure with ornate carvings depicting various deities and intricate floral motifs, while the smaller temple (Bahu) mirrors similar architectural elegance on a reduced scale. Despite enduring centuries of invasions and natural wear, the temples retain much of their original artistry. These structures exemplify the architectural brilliance of their era and continue to be significant cultural and historical landmarks within the Gwalior Fort.",
      image: "Sas_Bahu_Temple.jpg"
    },
    {
      year: "11th Century",
      title: "JAI VILAS PALACE",
      description: "The Jai Vilas Palace, located in Gwalior, Madhya Pradesh, was constructed in 1874 by Maharaja Jayajirao Scindia as a grand residence and to welcome the Prince of Wales. Designed by Lieutenant-Colonel Sir Michael Filose, the palace exhibits a blend of Tuscan, Italian-Doric, and Corinthian architectural styles. Spanning 1,240,771 square feet, it encompasses 400 rooms adorned with gold embellishments. The Durbar Hall features two of the world's largest chandeliers, each weighing approximately 3.5 tons, with the ceiling's strength tested by suspending ten elephants. The palace also houses a vast library containing 5,000 books. In 1964, 25 rooms were converted into the Jiwajirao Scindia Museum, showcasing royal artifacts, including a silver train that served guests in the dining room. The palace's construction cost was approximately ₹1 crore in 1874, equivalent to about ₹4,000 crore today. A railway siding was built to connect the palace directly to Gwalior station for the convenience of the royal family. The Scindia family continues to reside in a portion of the palace, maintaining its legacy as a symbol of royal opulence.",
      image: "jai-vilas-palace.jpg"
    },
    {
      year: "16th Century",
      title: "SUN TEMPLE",
      description: "The Sun Temple in Gwalior, also known as the Vivaswan Temple, is a remarkable architectural feat constructed between 1984 and 1988 by industrialist G.D. Birla. Inspired by Odisha's Konark Sun Temple, this shrine is designed in the form of a chariot drawn by seven horses, symbolizing the Sun God's journey across the sky. The temple's exterior is crafted from red sandstone, while the interior features pristine white marble. The sanctum houses a majestic idol of the Sun God seated in Padmasana, adorned with traditional ornaments. Intricate carvings of deities and mythological figures embellish the temple walls, totaling 373 statues. Strategically placed windows allow sunlight to illuminate the sanctum, highlighting the deity's golden crown at midday. Surrounded by lush gardens, the temple offers a serene environment for visitors. Daily rituals include morning and evening aartis, accompanied by traditional hymns and musical instruments. The temple complex also features bronze statues of G.D. Birla and his wife, paying homage to their contributions. Today, the Sun Temple stands as a symbol of Gwalior's rich cultural heritage and architectural brilliance. ​",
      image: "sun-temple.jpg"
    },
    {
      year: "19th Century",
      title: "SINGH MUSEUM",
      description: "​The Singh Museum, officially known as the HH Maharaja Sir Jiwajirao Scindia Museum, is housed within the Jai Vilas Palace in Gwalior, Madhya Pradesh. Established in 1964 by Rajmata Vijaya Raje Scindia in memory of her husband, Maharaja Jiwajirao Scindia, the museum spans 35 rooms of the palace. It showcases an extensive collection of artifacts, including royal clothing, weapons, manuscripts, paintings, and a silver train that once served food in the royal dining hall. The museum also features sculptures from the 2nd century BCE to the 20th century CE, Western art pieces like valuable oil paintings and lithographs of Napoleon and Tipu Sultan, and decorative arts from the 19th to 21st centuries. Visitors can explore the opulent Durbar Hall, adorned with gold-plated ceilings and massive chandeliers, reflecting the grandeur of the Scindia dynasty. This museum offers a comprehensive glimpse into the rich cultural heritage and royal lifestyle of the Scindias, making it a significant attraction in Gwalior.",
      image: "Singh-museum.jpg"
    }
  ];

  return (
    <div className="pt-24">
      <section className="py-24 bg-white" ref={timelineRef}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-serif mb-16 text-center"
        >
          THE HISTORY OF GWALIOR
        </motion.h1>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <motion.div
              className="absolute w-1 bg-stone-200 h-full left-1/2 transform -translate-x-1/2"
              style={{ scaleY: scrollYProgress }}
            />
            
            <div className="space-y-24">
  {timelineItems.map((item, index) => (
    <motion.div
      key={item.year}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className={`relative md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
        {/* Image Section */}
        <motion.div
          className="md:w-1/2 p-4"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={`/images/${item.image}`}
            alt={item.title}
            className="w-full h-auto object-cover rounded-lg"
            style={{ maxHeight: '300px' }} // Adjust the maxHeight as needed
          />
        </motion.div>

        {/* Divider Line */}
        <div className="hidden md:block w-px bg-gray-300 h-64"></div>

        {/* Content Section */}
        <div className="md:w-1/2 p-4">
          <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
          <p className="text-stone-600">{item.description}</p>
        </div>
      </div>
    </motion.div>
  ))}
</div>

          </div>
        </div>
      </section>
    </div>
  );
}