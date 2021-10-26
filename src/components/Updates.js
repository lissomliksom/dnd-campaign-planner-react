const Updates = () => {

  const updates = [
    { date: '02/10/21', content: 'Tweaked minor details with Ascendants'},
    { date: '08/10/21', content: 'Added Shadowdancer subclass'},
    { date: '13/10/21', content: 'Minor web updates'},
    { date: '14/10/21', content: 'Added Bubblesmith class'},
    { date: '17/10/21', content: 'Added major guilds to general lore'},
  ]

  return(
    <div className="blendverse-container">
      <h5 className="mb-2 font-semibold font-xl">Recent updates</h5>

      <div className="space-y-2 text-sm text-gray-700">

        {updates.reverse().slice(0,3).map(({ date, content }, index) => (
          <div 
            key={ index }
            className="flex space-x-6 opacity-75 hover:opacity-100">
            <span className="font-semibold text-gray-400">{ date }</span>
            <p>{ content }</p>
          </div>
        ))}

      </div>

    </div>
  )
}

export default Updates