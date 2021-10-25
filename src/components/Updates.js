const Updates = () => {

  const updates = [
    { date: '13/10/21', content: 'Minor web updates'},
    { date: '14/10/21', content: 'Added Bubblesmith class'},
    { date: '15/10/21', content: 'Added major guilds to general lore'},
  ]

  return(
    <div className="max-w-5xl px-4 py-6 mx-auto">
      <h5 className="mb-2 font-semibold font-xl">Recent updates</h5>

      <div className="space-y-2 text-gray-700">

        {updates.reverse().map(({ date, content }, index) => (
          <div 
            key={ index }
            className="flex space-x-6">
            <strong className="font-semibold text-gray-400">{ date }</strong>
            <p>{ content }</p>
          </div>
        ))}



      </div>

    </div>
  )
}

export default Updates