function sayHi(a) { // 1 RHS look-up cho hàm sayHi và 1 LHS look-up cho biến a 
	var b = ', Coders.Tokyo'; // 1 LHS look-up và 1 RHS look-up cho biến b
	return a + b; // 2 RHS look-ups tìm gía trị cho biến a và cho biến b
}

var c = sayHi( 'Hi' ); 
// 1 LHS look-up cho biến c

// Có tất cả 3 LHS look-ups và 4 RHS look-ups.