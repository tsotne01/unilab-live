// const DOG_API_URL = "https://dog.ceo/api/breeds/image/random";
// const CAT_API_URL = "https://api.thecatapi.com/v1/images/search"


// const getDogImage = async () => {
//     try {
//         const response = await fetch(DOG_API_URL)
//         const data = await response.json();
//         return data;
//     } catch (err) {
//         console.error(err);
//     }
// }

// const getCatImage = async () => {
//     let data = []
//     try {
//         const promise1 = new Promise((resolve, reject) => {
//             try {
//                 (async () => {
//                     const response = await fetch(CAT_API_URL)
//                     const data = await response.json();
//                     console.log(data);
//                     resolve(...data);
//                 })();
//             } catch (err) {
//                 console.error(err);
//             }
//         })
//         const promise2 = new Promise((resolve, reject) => {
//             try {
//                 (async () => {
//                     const response = await fetch(CAT_API_URL)
//                     const data = await response.json();
//                     console.log(data);
//                     resolve(...data);
//                 })();
//             } catch (err) {
//                 console.error(err);
//             }
//         })
//         const promise3 = new Promise((resolve, reject) => {
//             try {
//                 (async () => {
//                     const response = await fetch(CAT_API_URL)
//                     const data = await response.json();
//                     console.log(data);
//                     resolve(...data);
//                 })();
//             } catch (err) {
//                 console.error(err);
//             }
//         })
//         Promise.all([promise1, promise2, promise3]).then((d) => {
//             data = d
//         });
//         return data;
//     } catch (err) {
//         console.error(err);
//     }
// }

// export const getImages = async () => {
//     try {
//         const dog = await getDogImage();
//         const cats = await getCatImage();
//         dog["url"] = dog.message;
//         return [dog, ...cats];

//     } catch (err) {
//         console.error(err);
//     }
// }


export const dogAndCat = async () => {
    const catUrl = 'https://api.thecatapi.com/v1/images/search?limit=10';
    const dogUrl = 'https://dog.ceo/api/breeds/image/random';
  
    const [catRes, dogRes] = await Promise.all([
      fetch(catUrl).then(res => res.json()),
      fetch(dogUrl).then(res => res.json())
    ]);
  
    const cats = catRes.map(cat => ({ url: cat.url, type: 'cat' }));
    const dog = { url: dogRes?.message, type: 'dog' };
    const limitedCats = cats.splice(0,3);

    return [...limitedCats, dog];
  };