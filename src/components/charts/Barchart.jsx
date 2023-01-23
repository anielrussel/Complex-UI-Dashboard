import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as Chart} from 'chart.js/auto'

const Barchart = ({chartData}) => {
  return (
    <Bar data={chartData} options={chartData.options} />
  )
}

export default Barchart