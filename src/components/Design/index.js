import React from 'react';

const Design = () => {
  const companies = [
    {
      name: 'Google',
      linkedin: 'https://in.linkedin.com/in/shraddhanjalirao/',
      imageUrl: 'https://www.shutterstock.com/image-photo/kiev-ukraine-january-28-2019-260nw-1308116041.jpg',
      letter: 'HR shraddhanjalia Rao',
    },
    {
        
        name: 'Tech Mahindra',
        linkedin: 'https://in.linkedin.com/in/mukul-sah',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxj_YS7I2p1Gc27NfeBkdOnlcuW4sl_4VrzQ&usqp=CAU',
        letter: 'HR Mukul sah',
      },
    {
      name: 'TCS',
      linkedin: 'https://in.linkedin.com/in/ashishmach20/',
      imageUrl: 'https://th.bing.com/th/id/OIP.PWb0ottxUtR1QhSE8nS67gAAAA?pid=ImgDet&rs=1',
      letter: 'HR Ashishkumar',
    },
    
    {
        name: 'Facebook',
        linkedin: 'https://sg.linkedin.com/in/sandhyadevanathan?trk=public_profile_browsemap/',
        imageUrl: ' https://cdn3d.iconscout.com/3d/free/thumb/free-facebook-5020446-4186922.png',
        letter: 'HR sandhya devanathan',
    },

    {
        name: 'Infosys',
        linkedin: 'https://in.linkedin.com/in/shikha-gupta-6700a377?original_referer=https%3A%2F%2Fwww.google.com%2F/',
        imageUrl: 'https://1000logos.net/wp-content/uploads/2020/08/Logo-Infosys.jpg',
        letter: 'HR shikha gupta',
      },

    {
      name: 'Zoho',
      linkedin: 'https://in.linkedin.com/in/natraj-baskar-17165727?trk=public_profile_browsemap',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjgjuU4KP_aMMPWuE0B3w5LWzwA6-6gVc-aBHt5PEVNjOjJF50v6zpUX4iCfZUCvGgzAM&usqp=CAU',
      letter: 'HR natraj baskar',
    },
    {
      name: 'Microsoft',
      linkedin: 'https://in.linkedin.com/in/swatiraghunandan',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRkgMNv8V0AEDF_XsnUiibbhLXsZ2hla8Iw&usqp=CAU',
      letter: 'HR swati raghunandan',
    },
    {
      name: 'Paytm',
      linkedin: 'https://in.linkedin.com/in/nitika-goyal-8a0549115',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI8GAOU7yfdUYAPUGnGoSb1aENrSd97kkxPg3tIqyABkbpHo74H5avcWzcQ_y0ZIfdNeQ&usqp=CAU',
      letter: 'HR nitika goyal',
    },
    {
      name: 'OLA',
      linkedin: 'https://in.linkedin.com/in/mithil-patkar',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGNvkcC3m_5qSX2U39nHPi6AxCmSx0ftQ65sG041xnLKjcbcRdRcWPaofVvfgp2VZdnVI&usqp=CAU',
      letter: 'HR mithil-patkar',
    },
    {
      name: 'UBER',
      linkedin: 'https://in.linkedin.com/in/geetanjali-sharma-ab5079220?original_referer=https%3A%2F%2Fwww.google.com%2F',
      imageUrl: 'https://thumbs.dreamstime.com/b/uber-logo-uber-logo-white-background-vector-format-avaliable-127602356.jpg',
      letter: 'HR geetanjali sharma',
    },
    {
      name: 'Flipkart',
      linkedin: 'https://in.linkedin.com/in/nanda-kapoor-7b5a11110',
      imageUrl: 'https://i.pinimg.com/originals/15/aa/16/15aa1678d4ee5615c5c53ed5c9968126.png',
      letter: 'HR nanda kapoo',
    },
    {
      name: 'Amazon',
      linkedin: 'https://in.linkedin.com/in/sameerkmr?original_referer=https%3A%2F%2Fwww.google.com%2F',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUBdNSM6cLPwh10voOXjEK7Xlq2DuSn36B0ob0giO_tKmeoRegiuIa4LCqK2VKv5bqlvk&usqp=CAU',
      letter: 'Sameer Kumar',
    },
    {
      name: 'Wipro',
      linkedin: 'https://in.linkedin.com/in/priya-dey',
      imageUrl: 'https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/ygi0uferwwy6yie5i2f3',
      letter: 'HR priya dey',
    },
    {
        name: 'Accenture',
        linkedin: 'https://in.linkedin.com/in/deepshikha-agrawal-8a7037110?original_referer=https%3A%2F%2Fwww.google.com%2F',
        imageUrl: 'https://www.savethechildren.org/content/dam/usa/images/donors/partners/logos/accenture-rec.png/_jcr_content/renditions/original.img.png',
        letter: 'HR priya dey',
    },
    {
        name: 'IBM',
        linkedin: 'https://in.linkedin.com/in/priya-dey',
        imageUrl: 'https://webimages.mongodb.com/_com_assets/cms/ibmlogo-s4il2j9lwy.png?auto=format%2Ccompress&ch=DPR',
        letter: 'HR priya dey',
    },
    {
        name: 'Deloitte',
        linkedin: 'https://in.linkedin.com/in/harsha-motwani-a87975192?original_referer=https%3A%2F%2Fwww.google.com%2F',
        imageUrl: 'https://mma.prnewswire.com/media/379251/do_not_use_until_june_15___deloitte_logo_Logo.jpg?p=facebook',
        letter: 'HR harsha motwani',
    },
    
    {
        name: 'Apple',
        linkedin: 'https://in.linkedin.com/in/asheeshhr',
        imageUrl: 'https://logo-marque.com/wp-content/uploads/2022/01/iPhone-Embleme.jpg',
        letter: 'HR riya dey',
    },
    {
        name: 'DELL',
        linkedin: 'https://in.linkedin.com/in/amala-paul-5661b2138',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/2048px-Dell_logo_2016.svg.png',
        letter: 'Sameer Kumar',
    },
  ];

 
  return (
    <section class="text-gray-600 body-font" style={{ background: 'white' }}>
      <div class="container px-5 py-25 mx-auto">
        <div class="flex flex-wrap -m-2">
          {companies.map((company, index) => (
            <div class="lg:w-1/6 md:w-1/2 p-4 w-original" key={index}>
              <a class="block relative h-40 rounded overflow-hidden">
                <a href={company.linkedin}>
                  <img src={company.imageUrl} alt={`${company.name} Logo`} />
                </a>
              </a>
              <div class="mt-1">
                <h3 class="text-black-500 text-x tracking-widest title-font text-lg font-medium  mb-1">{company.letter}</h3>
                <h2 class="text-red-900 title-font text-small" style={{ color: 'green' }}></h2>
                <p class=" title-font text-lg font-medium  mt-1" style={{ color: 'red' }}>{company.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Design;