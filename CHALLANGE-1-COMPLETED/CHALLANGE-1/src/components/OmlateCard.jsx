import React from 'react'

const OmlateCard = () => {
  return (
    // CONTAINER START
    <div className='w-full  bg-[#DACFB3] flex justify-center items-center py-0 md:py-16 '>
      {/* CARD START */}
      <div className='rounded-lg md:w-[60%] xl:w-[50%] lg:w-[40%] bg-red-900 '>
        {/* IMAGE DIV */}
        <div className='w-full bg-white p-0 md:p-6 md:rounded-t-lg'>
          <img className='w-full md:rounded-xl' src="./image-omelette.jpeg " alt="" srcset="" />
        </div>
        {/* IMAGE DIV END */}
        {/* CONTENT DIV START */}
        <div className='w-full bg-white px-6 pb-6 pt-6 space-y-3 md:rounded-b-lg'>
          {/* HEADING */}
          <h1 className='text-xl font-bold'>Simple Omelette Recipe</h1>
          {/* PARAGRAPH */}
          <p className='text-sm font-thin'> An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
            to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
          {/* PREPARATION */}
          <div className='w-full p-4 bg-red-100 rounded-xl space-y-2'>
            <h3 className=' font-bold text-red-900'>Preparation time</h3>
            <ul className='list-disc px-8'>
              <li className='pl-2'>
                <span className='font-bold'>Total:</span> Approximately 10 minutes

              </li >
              <li className='pl-2'><span className='font-bold'>Preparation:</span> 5 minutes</li>
              <li className='pl-2'><span className='font-bold'>Cooking:</span> 5 minutes</li>
            </ul>
          </div>
          {/* INGREDIANTS */}
          <div className=' space-y-2 border-gray-300 pb-4 border-b'>
            <h3 className='font-bold text-xl text-red-800'>Ingredients</h3>
            <ul className='list-disc px-8 text-red-800'>
              <li className='pl-2  text-black'>2-3 large eggs</li>
              <li className='pl-2 text-black'>Salt, to taste</li>
              <li className='pl-2 text-black'>Pepper, to taste</li>
              <li className='pl-2 text-black'>1 tablespoon of butter or oil</li>
              <li className='pl-2 text-black'>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
            </ul>

          </div>
          {/* INSTRUCTIONS */}
          <div className='space-y-2 border-gray-300 pb-4 border-b'>
            <h3 className='font-bold text-xl text-red-800'>Instructions</h3>
            <ul className='list-decimal px-8 text-red-800'>
              <li className='pl-2  text-black'><span className='font-bold'>Beat the eggs:</span> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.
                You can add a tablespoon of water or milk for a fluffier texture.
              </li>
              <li className='pl-2 text-black'><span className='font-bold'>Heat the pan:</span>Place a non-stick frying pan over medium heat and add butter or oil.</li>
              <li className='pl-2 text-black'><span className='font-bold'>Cook the omelette:</span>Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure
                the eggs evenly coat the surface.</li>
              <li className='pl-2 text-black'><span className='font-bold'>Add fillings (optional):</span> When the eggs begin to set at the edges but are still slightly runny in the
                middle, sprinkle your chosen fillings over one half of the omelette.</li>
              <li className='pl-2 text-black'><span className='font-bold'>Fold and serve:</span>As the omelette continues to cook, carefully lift one edge and fold it over the
                fillings. Let it cook for another minute, then slide it onto a plate.</li>
              <li className='pl-2 text-black'><span className='font-bold'>Enjoy:</span>Serve hot, with additional salt and pepper if needed.</li>
            </ul>
          </div>

          {/* NUTRITION */}



          <div className='space-y-3'>
          <h3 className='font-bold text-xl text-red-800'>Nutrition</h3>
          <p className='text-sm'>The table below shows nutritional values per serving without the additional fillings.</p>
          <div>
            <div className='flex justify-between border-gray-200 border-b pb-2'>
              <p className='text-left px-2 md:px-10 w-[25%]'>Calories</p>
              <p className='text-left w-1/2 font-bold text-red-800'>277kcal</p>
            </div>
            <div className='flex justify-between border-gray-200 border-b pb-2'>
              <p className='text-left px-2 md:px-10 w-[25%]'>Carbs</p>
              <p className='text-left w-1/2 font-bold text-red-800'>0g</p>
            </div>
            <div className='flex justify-between border-gray-200 border-b pb-2'>
              <p className='text-left px-2 md:px-10 w-[25%]'>Protein</p>
              <p className='text-left w-1/2 font-bold text-red-800'>20g</p>
            </div>
            <div className='flex justify-between pb-2'>
              <p className='text-left px-2 md:px-10 w-[25%]'>Fat</p>
              <p className='text-left w-1/2 font-bold text-red-800'>22g</p>
            </div>
          </div>
          </div>
        </div>
        {/* CONTENT DIV END */}
      </div>
      {/* CARD END */}
    </div>
    // CONTAINER END
  )
}

export default OmlateCard
