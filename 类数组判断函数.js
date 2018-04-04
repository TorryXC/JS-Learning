function isArrayLikeObject(alo) {
  if (alo &&                          //不是null undefined 空字符串等
    typeof alo === "object" &&        //是对象
    ifFinite(alo.length) &&           //长度有限数值
    alo.length >= 0 &&                //长度非负
    alo.length === Math.floor(alo.length) &&     //长度整数
    alo.length < 4294967296)     //长度小于2^32
    return true;
  else
    return false;
}
