import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const PromoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const router = useRouter();

  const bannerSrc = encodeURI('/img/banner/Honoring_Our_Heroes_ Memorial_Stone_Offers.webp');
  const targetLink = '/get-quote-now/';

  useEffect(() => {
    // Check if dismissed during current session
    try {
      const isDismissed = sessionStorage.getItem('promo_banner_dismissed');
      if (isDismissed === 'true') {
        setIsMinimized(true);
        setIsOpen(false);
        return;
      }
    } catch (e) {
      // ignore
    }

    // Auto-open after 1.5s on initial visit
    const timer = setTimeout(() => {
      setIsOpen(true);
      setIsMinimized(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = (e) => {
    if (e) e.stopPropagation();
    setIsOpen(false);
    setIsMinimized(true);
    try {
      sessionStorage.setItem('promo_banner_dismissed', 'true');
    } catch (err) {
      // ignore
    }
  };

  const handleOpenFromTab = () => {
    setIsMinimized(false);
    setIsOpen(true);
  };

  const handleBannerClick = () => {
    setIsOpen(false);
    setIsMinimized(true);
  };

  return (
    <>
      {/* 1. DOCKED WALL TAB ON RIGHT EDGE (WHEN CLOSED/MINIMIZED) */}
      {isMinimized && (
        <div
          className="promo-side-wall-tab"
          onClick={handleOpenFromTab}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleOpenFromTab()}
          aria-label="View Special Wholesale Offer"
        >
          <div className="tab-pill">
            <span className="tab-pulse-dot"></span>
            <span className="tab-icon">
              <i className="bi bi-tag-fill"></i>
            </span>
            <span className="tab-text">Special Wholesale Offer • Up to 20% OFF</span>
            <span className="tab-arrow">
              <i className="bi bi-chevron-left"></i>
            </span>
          </div>
        </div>
      )}

      {/* 2. FULL PROMO POPUP MODAL */}
      {isOpen && (
        <div className="promo-modal-overlay" onClick={handleClose}>
          <div
            className="promo-modal-dialog"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* Close / Minimize Button */}
            <button
              type="button"
              className="promo-close-btn"
              onClick={handleClose}
              aria-label="Close and dock to side"
              title="Close"
            >
              ✕
            </button>

            {/* Whole Banner Linked to /get-quote-now/ */}
            <Link href={targetLink} legacyBehavior>
              <a
                className="promo-banner-link"
                onClick={handleBannerClick}
                aria-label="Honoring Our Heroes - Special Wholesale Offers - Get a Quote"
              >
                <img
                  src={bannerSrc}
                  alt="Honoring Our Heroes - Special Wholesale Offers"
                  className="promo-banner-image"
                  loading="eager"
                />
              </a>
            </Link>
          </div>
        </div>
      )}

      <style jsx>{`
        /* ==============================================================
           1. RIGHT DOCKED WALL TAB (PEEKING TAB)
        ============================================================== */
        .promo-side-wall-tab {
          position: fixed;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          z-index: 99999;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          filter: drop-shadow(-4px 6px 14px rgba(0, 0, 0, 0.25));
        }

        .promo-side-wall-tab .tab-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #242220 0%, #161514 100%);
          border: 1.5px solid var(--primary, #aa7d4a);
          border-right: none;
          color: #ffffff;
          padding: 12px 18px 12px 14px;
          border-radius: 30px 0 0 30px;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          box-shadow: -4px 0 16px rgba(170, 125, 74, 0.35);
          transition: all 0.3s ease;
        }

        .promo-side-wall-tab:hover .tab-pill {
          background: linear-gradient(135deg, #aa7d4a 0%, #8c6031 100%);
          color: #ffffff;
          padding-left: 20px;
          box-shadow: -6px 0 22px rgba(170, 125, 74, 0.6);
        }

        .tab-pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #25d266;
          box-shadow: 0 0 0 0 rgba(37, 210, 102, 0.7);
          animation: pulseDot 2s infinite;
        }

        @keyframes pulseDot {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(37, 210, 102, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 6px rgba(37, 210, 102, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(37, 210, 102, 0);
          }
        }

        .tab-icon {
          color: #dfbc96;
          font-size: 14px;
        }

        .tab-text {
          font-family: var(--font-sec, 'Open Sans', sans-serif);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .tab-arrow {
          font-size: 12px;
          color: var(--primary, #aa7d4a);
        }

        .promo-side-wall-tab:hover .tab-arrow {
          color: #ffffff;
        }

        /* ==============================================================
           2. FULL SCREEN POPUP OVERLAY
        ============================================================== */
        .promo-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.78);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          z-index: 999999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeInOverlay 0.3s ease forwards;
        }

        @keyframes fadeInOverlay {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .promo-modal-dialog {
          position: relative;
          width: 100%;
          max-width: 680px;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.65), 0 0 0 1.5px #c8982a;
          overflow: hidden;
          animation: popUpScale 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          line-height: 0;
        }

        @keyframes popUpScale {
          from {
            opacity: 0;
            transform: scale(0.92) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .promo-close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1.5px solid #d4af37;
          background: rgba(26, 18, 10, 0.88);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 20;
          font-size: 14px;
          font-weight: bold;
          line-height: 1;
          transition: all 0.25s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
        }

        .promo-close-btn:hover {
          background: #aa7d4a;
          border-color: #aa7d4a;
          transform: rotate(90deg) scale(1.1);
          color: #ffffff;
        }

        /* Banner Link & Image */
        .promo-banner-link {
          display: block;
          width: 100%;
          cursor: pointer;
          outline: none;
        }

        .promo-banner-image {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
          transition: transform 0.25s ease;
        }

        .promo-banner-link:hover .promo-banner-image {
          transform: scale(1.01);
        }

        @media (max-width: 600px) {
          .promo-modal-overlay {
            padding: 12px;
          }
          .promo-close-btn {
            top: 6px;
            right: 6px;
            width: 28px;
            height: 28px;
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
};

export default PromoPopup;
