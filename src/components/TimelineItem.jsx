import React from 'react'

function TimelineItem({ year, title, duration, details }) {
  const uniqueYears = [...new Set(year.split(' - '))].join(' - ')

  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700">
      <li className="mb-10 ml-4">
        <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
            {uniqueYears}
          </span>
          <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
            {title}
          </h3>
          <div className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
            {duration}
          </div>
        </div>
        <div className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
          {details.map((detailItem, index) => (
            <div key={index}>
              <p className="inline-block px-2 py-1 font-semibold text-stone-900 dark:text-white">
                <span className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
              </p>
              <p style={{ whiteSpace: 'pre-line' }}>{detailItem.detail}</p>
            </div>
          ))}
        </div>
      </li>
    </ol>
  )
}

export default TimelineItem
