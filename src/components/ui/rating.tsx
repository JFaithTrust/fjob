interface RatingProps {
  initialRating: number;
  maxRating: number;
}

const Rating = ({ initialRating, maxRating }: RatingProps) => {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(maxRating)].map((_, index) => {
        const decimalPart = initialRating - index;
        let fillValue = "none";
        if (decimalPart > 0) {
          fillValue = decimalPart >= 1 ? "#FFA500" : `url(#partial_${index})`;
        }

        return (
          <span key={index} className={`text-2xl text-gray-400`}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id={`partial_${index}`}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset={`${decimalPart * 100}%`} stopColor="#FFA500" />
                  <stop
                    offset={`${decimalPart * 100}%`}
                    stopColor="transparent"
                  />
                </linearGradient>
              </defs>
              <path
                d="M2.70994 12.0826C2.42044 12.2311 2.09194 11.9709 2.15044 11.6386L2.77294 8.09113L0.130693 5.57413C-0.116057 5.33862 0.0121932 4.90813 0.342943 4.86163L4.01644 4.33963L5.65444 1.09437C5.80219 0.801875 6.20194 0.801875 6.34969 1.09437L7.98769 4.33963L11.6612 4.86163C11.9919 4.90813 12.1202 5.33862 11.8727 5.57413L9.23119 8.09113L9.85369 11.6386C9.91219 11.9709 9.58369 12.2311 9.29419 12.0826L6.00094 10.3906L2.70919 12.0826H2.70994Z"
                fill={fillValue}
                stroke="#FF9228"
              />
            </svg>
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
