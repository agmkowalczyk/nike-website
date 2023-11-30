const ShoeCard = ({ imgUrl, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgUrl.bigShoe) {
      changeBigShoeImage(imgUrl.bigShoe)
    }
  }

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgUrl.bigShoe
          ? 'border-coral-red'
          : 'border-transparent'
      } cursor-pointer max-sm: flex-1 hover:scale-105 transition-transform`}
      onClick={handleClick}
    >
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <img
          src={imgUrl.thumbnail}
          alr='shoe collection'
          width={127}
          height={103}
          className='object-contain'
        />
      </div>
    </div>
  )
}

export default ShoeCard
