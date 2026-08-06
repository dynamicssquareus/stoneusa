import Image from "next/image";

export default function UpcomingProductCard({ product, onBook }) {
    return (
        <>
        <div className="col-lg-4 col-md-6 mb-4 d-flex">
            <div className="card-m-01 card-m-new">

                <div className="card-pick">
                    <Image
                        src={product.image}
                        width={400}
                        height={400}
                        alt={product.title}
                    />
                </div>

                <h6>{product.title}</h6>

                {/* <p className="mut">
                    H/S: {product.hsSize} | Base: {product.baseSize}
                </p> */}

                <p className="mut">
  {product.size ? (
    <>Size: {product.size}</>
  ) : (
    <>
      H/S: {product.hsSize} | Base: {product.baseSize}
    </>
  )}
</p>

                {/* <p>{product.description}</p> */}
                {/* {product.options.map((option, index) => (
  <p key={index}>
    {option.label}: £{option.price || option.pricePerSet}
  </p>
))} */}

                <span className="badge floting-com bg-warning text-dark mb-3">
                    Arriving Soon
                </span>

                <button
                    className="btn btnii"
                    onClick={() =>
                        onBook({
  title: product.title,
  size: product.size
  ? product.size
  : `H/S: ${product.hsSize} | Base: ${product.baseSize}`,
  yard: product.yard || "Coming Soon",
})
                    }
                >
                    Prebook Now
                </button>

            </div>
        </div>
        <style jsx global>
                    {`
            .card-m-01 h6 {
              font-family: var(--font-sec) !important;
              font-size: 16px;
              font-weight: bold;
              text-transform: capitalize;
            }
            .card-m-01 {
              border-radius: 8px;
              background-color: #f7f6f3;
              padding: 15px 15px 30px 15px;
              width: 100%;
            }
            .mut {
              font-family: var(--font-sec) !important;
              font-size: 16px;
              font-weight: normal;
              line-height: 1.5;
              color: #4a4a4a !important;
            }
            .card-m-01 .card-pick {
              text-align: center;
              margin-bottom: 30px;
              width: 100%;
              height: auto;
            }
            .card-pick img {
              width: 100%;
              height: 100%;
            }
            .form-ff {
              display: grid;
              grid-template-columns: 4fr 2fr;
              gap: 0px;
            }
            .sold-out-box {
              border: 1px solid #b55f5f;
              border-radius: 4px;
              background: #b95757;
              color: #ffffff;
              font-size: 15px;
              font-weight: 600;
              padding: 10px 15px;
              text-align: center;
              text-transform: uppercase;
              width: 100%;
            }
            .fw-bold-bg {
              border-radius: 0px 4px 4px 0px;
              background-color: #ff8c3a;
              background-image: linear-gradient(to right, #f9d2ac, #ff8c3a);
              display: flex;
              align-items: center;
              justify-content: right;
              padding-right: 15px;
              font-weight: bold;
              color: #4a4a4a;
              padding: 10px 20px;
            }
            .form-select {
              border-color: #ff8c3a;
              font-size: 15px;
              border-right-color: transparent;
              border-radius: 4px 0px 0px 4px;
            }
            .di-sec {
              height: 20px;
              margin-top: 7px;
              text-align: right;
            }
            .small-p {
              color: #4a4a4a;
              font-weight: bold;
              font-size: 14px;
              margin-bottom: 0;
            }
            .small-c {
              font-size: 14px;
              color: #d95404;
              margin-top: -20px;
              font-weight: 600;
              margin-bottom: 30px;
            }
              .btn-three-black,.btnii {
    background-color: #1a1c17;
    color: #fff;
    padding: 10px 25px;
    border-radius: 4px;
    border: none
}

.btn-three-black:hover,.btnii:hover {
    background-color: #2f302f;
    border: none;
    color: #fff
}
    .card-m-new {
    position: relative
}

.card-m-new .floting-com {
    position: absolute;
    top: 15px;
    left: 15px;
    border-radius: 0
}
            @media (max-width: 767px) {
              .small-p {
                font-size: 13px !important;
              }
              .small-c {
                font-size: 15px !important;
                margin-top: -22px !important;
              }
              .form-select {
                border-right-color: #ff8c3a;
                border-radius: 4px;
                margin-bottom: 3px;
              }
              .fw-bold-bg {
                border-radius: 4px;
              }
            }
          `}
                </style>
        </>
    );
}