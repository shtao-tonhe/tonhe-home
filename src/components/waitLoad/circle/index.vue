<template>
  <div class="box-list">
    <div class="box-item">
      <div class="item-tip"></div>
    </div>
    <div class="box-item">
      <div class="item-tip"></div>
    </div>
    <div class="box-item">
      <div class="item-tip"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .box-list {
    max-width: 100px;
    width: 100%;
    height: 50px;
    background: rgba(255, 0, 0, .12);
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }

  .box-item {
    width: 13px;
    margin: 0 10px 0 0;
  }

  .box-item .item-tip {
    position: relative;
    width: 13px;
    height: 3px;
    border-radius: 2px;
    background: #fff;
    margin: 0 10px;
  }

  .box-item:nth-child(1) .item-tip {
    animation: animate1 2s linear infinite;
  }

  .box-item:nth-child(2) .item-tip {
    animation: animate2 2s linear infinite;
  }

  .box-item:nth-child(3) .item-tip {
    animation: animate3 2s linear infinite;
  }


  @-webkit-keyframes animate1 {

    0% {
      width: 3px;
      height: 3px;
    }

    30% {
      width: 3px;
      height: 13px;
      transform: translateY(0px);
    }

    35% {
      width: 13px;
      height: 3px;
      transform: translateY(0px);
    }

    10%,
    25% {
      width: 3px;
      height: 13px;
      transform: translateY(-20px);
    }
  }

  @-webkit-keyframes animate2 {

    0% {
      width: 0;
      height: 0;
    }

    38% {
      width: 3px;
      height: 13px;
      transform: translateY(0px);
    }

    43% {
      width: 13px;
      height: 3px;
      transform: translateY(0px);
    }

    18%,
    33% {
      width: 3px;
      height: 13px;
      transform: translateY(-20px);
    }
  }

  @-webkit-keyframes animate3 {

    0% {
      width: 0;
      height: 0;
    }

    13%,
    43% {
      width: 3px;
      height: 3px;
      transform: translateY(0px);
    }

    48% {
      width: 13px;
      height: 3px;
      transform: translateY(0px);
    }

    23%,
    38% {
      width: 3px;
      height: 13px;
      transform: translateY(-20px);
    }
  }
</style>