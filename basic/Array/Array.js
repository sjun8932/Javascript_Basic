const candidate1 = Array(45).fill() // candidate === 후보군
// 위의 코드는 undefined의 값으로 45개를 배열에 넣어준다.

const candidate2 = Array(45).fill(1)
// 위의 코드는 값 1로 배열에 45개 꽂아 넣어준다.

const candidate3 = Array(45).fill().map( v => 1)
// 위의 코드도 값 1로 배열에 45개 꽂아 넣어준다 === 배열에 들어있는 값 1로 1대1 맵핑을 해준다. (undefined+1=1) x 45개 

const candidate4 = Array(45).fill(1).map( v => v+1 )
// 배열 크기 45개인 배열을 만들고 그 안에 1 45개를 채워 넣고 그 안에 있는 모든 1값에 + 1을 해준다
// fill을 안쓰고 map만 써도 되진 않음 그건 일반 배열에서만 통함. array를 만들고 map을 이용해 1대1 맵핑을 하기 위해선 fill을 중간에 써줘야 한다.
// [1,2,3].map( v => v+1 )
const candidate5 = Array(45).fill().map((v,i) => i)
// map의 또다른 기능은 배열 하나 하나의 특정값(여기선 v)을 다른 값으로 매칭해주는 기능... v는 특정 값 두번째 매개변수는 그 방값의 번호 (방 번호) => 배열의 방이 있는데 45개의 방 중 하나를 호실을 말하는 거야 (방 번호)   
const candidate6 = Array(45).fill().map((v,i) => i+1)
//

const love = ( a, b, c)
const d = add (5, 7, 9)

// a , b, c 는 매개변수 , parameter라고 하고
// 5, 7, 9는 인수 , argument라 한다.