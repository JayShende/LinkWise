const LoadingDots = () => {
    const svgBg = `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="%23111827" stroke="%23111827" stroke-width="8" r="15" cx="40" cy="100"><animate attributeName="opacity" calcMode="spline" dur="1.7" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="%23111827" stroke="%23111827" stroke-width="8" r="15" cx="100" cy="100"><animate attributeName="opacity" calcMode="spline" dur="1.7" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="%23111827" stroke="%23111827" stroke-width="8" r="15" cx="160" cy="100"><animate attributeName="opacity" calcMode="spline" dur="1.7" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>')`;
  
    return (
      <div
        className="w-[200px] h-[200px] bg-no-repeat bg-contain bg-center"
        style={{
          backgroundImage: svgBg,
        }}
      />
    );
  };
  
  export default LoadingDots;
  