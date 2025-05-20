export default function BMWCard({ car, onEdit, onDelete }) {
    return (
      <div className='p-4 bg-gray-800 rounded-xl flex justify-between items-center hover:bg-gray-700 transition-all'>
        <div>
          <div className='text-lg font-semibold'>{car.model}</div>
          <div className='text-sm text-gray-400'>{car.year} • {car.horsepower} HP</div>
        </div>
        <div className='flex gap-3'>
          <button className='text-yellow-400' onClick={() => onEdit(car)}>Edit</button>
          <button className='text-red-500' onClick={() => onDelete(car._id)}>Delete</button>
        </div>
      </div>
    )
  }
  