<template>
<div class="background">
  <div class="cardWrapper">
    <div class="headerWrapper">
      <div class="leftWrapper">
        <div class="header">Weekly report</div>
        <div class="dates">01. Feb - 07. Feb</div>
      </div>
      <div class="rightWrapper">
        <div class="header">Revenue</div>
        <div class="currency">$ 3621.79</div>
      </div>
    </div>

    <div class="bodyWrapper">
      <div class="legendWrapper">
        <span class="red">Views</span>
        <span class="blue">Purchases</span>
      </div>

      <div class="graphWrapper">
        <div class="line-1"></div>
        <div class="line-2"></div>
        <div class="line-3"></div>
        <div class="data red">
          <svg><polyline points="9,46 50,12 90,23 130,11 171,38 211,48 251,19"></polyline></svg>
          <div class="points">
            <div class="point-1">
              <div class="tooltip">458</div>
            </div>
            <div class="point-2">
              <div class="tooltip">812</div>
            </div>
            <div class="point-3">
              <div class="tooltip">746</div>
            </div>
            <div class="point-4">
              <div class="tooltip">877</div>
            </div>
            <div class="point-5">
              <div class="tooltip">517</div>
            </div>
            <div class="point-6">
              <div class="tooltip">434</div>
            </div>
            <div class="point-7">
              <div class="tooltip">458</div>
            </div>
          </div>
        </div>
        <div class="data blue">
          <svg>
					<polyline points="9,61 50,50 90,65 130,55 171,61 211,74 251,64"></polyline>    
				</svg>
          <div class="points">
            <div class="point-1">
              <div class="tooltip">26</div>
            </div>
            <div class="point-2">
              <div class="tooltip">41</div>
            </div>
            <div class="point-3">
              <div class="tooltip">22</div>
            </div>
            <div class="point-4">
              <div class="tooltip">36</div>
            </div>
            <div class="point-5">
              <div class="tooltip">25</div>
            </div>
            <div class="point-6">
              <div class="tooltip">13</div>
            </div>
            <div class="point-7">
              <div class="tooltip">20</div>
            </div>
          </div>
        </div>
      </div>

      <div class="daysWrapper">
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
        <div>Sun</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:700,600,500,400);

body {
  margin: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Open Sans", "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  font-size: 14px;
}

.background {
  position: relative;
  background: linear-gradient(to bottom, #42a7a1 0%, #245d59 100%);
  border-radius: 5px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cardWrapper {
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 220px;
  background: white;
  box-shadow: 4px 8px 12px 0 rgba(0, 0, 0, 0.3);
  color: #786450;
  border-radius: 5px;

  .headerWrapper {
    background-color: #f1ba64;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 260px;
    color: white;
    padding: 10px;
    line-height: 16px;
    border-radius: 5px 5px 0 0;

    .leftWrapper {
      .header {
        text-transform: uppercase;
        font-weight: bold;
      }

      .dates {
        font-size: 12px;
      }
    }

    .rightWrapper {
      text-align: right;
      .header {
        font-size: 12px;
      }

      .currency {
        font-weight: bold;
      }
    }
  }

  .bodyWrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 10px;
    height: 100%;

    .legendWrapper {
      text-align: right;
      span {
        position: relative;
        font-size: 10px;
        color: #606060;
        padding: 0 10px 0 25px;
      }

      span:before {
        position: absolute;
        left: 6px;
        top: 6px;
        content: "";
        width: 11px;
        height: 3px;
        border-radius: 3px;
      }

      .red:before {
        background: #fa7373;
      }

      .blue:before {
        background: #7ba2ff;
      }
    }

    .graphWrapper {
      position: absolute;
      top: 45px;
      width: 260px;

      .line-1,
      .line-2,
      .line-3 {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: #f2f2f2;
      }

      .line-2 {
        top: 40px;
      }

      .line-3 {
        top: 80px;
        bottom: 0;
      }

      .data {
        svg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        polyline {
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
        }
      }

      .red {
        polyline {
          stroke: #fa7373;
        }

        [class^="point-"],
        .tooltip,
        .tooltip:after {
          background: #fa7373;
        }

        .point-1 {
          left: 7px;
          top: 43px;
        }
        .point-2 {
          left: 48px;
          top: 9px;
        }
        .point-3 {
          left: 88px;
          top: 20px;
        }
        .point-4 {
          left: 128px;
          top: 8px;
        }
        .point-5 {
          left: 169px;
          top: 35px;
        }
        .point-6 {
          left: 209px;
          top: 45px;
        }
        .point-7 {
          left: 249px;
          top: 16px;
        }
      }

      .blue {
        polyline {
          stroke: #7ba2ff;
        }

        [class^="point-"],
        .tooltip,
        .tooltip:after {
          background: #7ba2ff;
        }

        .point-1 {
          left: 7px;
          top: 58px;
        }
        .point-2 {
          left: 48px;
          top: 47px;
        }
        .point-3 {
          left: 88px;
          top: 62px;
        }
        .point-4 {
          left: 128px;
          top: 52px;
        }
        .point-5 {
          left: 169px;
          top: 58px;
        }
        .point-6 {
          left: 209px;
          top: 71px;
        }
        .point-7 {
          left: 249px;
          top: 61px;
        }
      }

      .tooltip {
        position: absolute;
        bottom: 13px;
        left: 50%;
        transform: translate3d(-50%, 10px, 0);
        font-weight: 600;
        font-size: 11px;
        line-height: 11px;
        color: #fff;
        padding: 8px 6px;
        border-radius: 3px;
        visibility: hidden;
        opacity: 0;
        transition: transform 0.4s ease-out 0s, opacity 0.4s ease-out 0s;

        &:after {
          position: absolute;
          display: block;
          content: "";
          height: 6px;
          width: 6px;
          left: 50%;
          margin-left: -3px;
          bottom: -3px;
          transform: rotate(45deg);
        }
      }

      [class^="point-"] {
        position: absolute;
        width: 6px;
        height: 6px;
        border-radius: 3px;
        cursor: pointer;
        z-index: 10;

        &:hover .tooltip {
          visibility: visible;
          opacity: 1;
          transform: translate3d(-50%, 0, 0);
        }
      }
    }

    .daysWrapper {
      text-transform: uppercase;
      display: flex;
      justify-content: space-between;
      font-size: 10px;
      color: #949494;
    }
  }
}

</style>