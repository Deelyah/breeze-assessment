const TableIcon = ({ color }) => {
  return (
    <svg
      width='205'
      height='99'
      viewBox='0 0 205 99'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='205' height='99' fill='none' />
      <rect x='22' width='161' height='99' rx='12' fill={color} />
      <rect y='35' width='13' height='58' fill={color} />
      <rect x='192' y='41' width='13' height='58' fill={color} />
    </svg>
  );
};

export default TableIcon