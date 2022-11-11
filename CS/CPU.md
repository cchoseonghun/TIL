CPU
===

> 컴퓨터를 구성할 때 cpu, memory, disk 세가지가 제일 중요한데   
> cpu는 n개의 register로 구성되어 있다. -> n * state 가 되었음 (state = Register들)   
>     
> cpu가 왜 싱글코어에서 멀티코어로 진화할 수 밖에 없었나?   
> '무어의 법칙', '발열'   
> 싱글코어의 성능을 계속 늘리다간 감당할 수 없게됨.   
> 때문에 코어의 성능 향상엔 본질적 한계가 있다.   
> 차라리 multiple하게 해결해보자 -> 멀티코어   
> 멀티하게 state 가짐
> 
> CPU 에는 ALU (산술논리연산), CU (Control Unit), Register, Cache 가 있음.   
> 프로그램 A -> 어떤거 클릭 -> cpu에게 ~연산을 해주세요   
> => CU 에서 
1. fetch 
2. 해석   
> => ALU 에서 산술논리 연산
3. 일거리반복을 통해 프로그램 메모리가 바뀌게 됨

> Register 는 업무별로   
> General-purpose 범용   
> Special-purpose 특수용   
> 레지스터, PC프로그램 (프로그램 카운터) 등에 대해선 따로 더 디깅해보기   

## Cache
> CPU와 Disk 사이엔 거리가 있다.   
> 거리가 있기 때문에 빈번한, 또는 가장 최근에 쓰인걸 캐싱해서 씀. Cache Coherence 캐시 코히런스   

> 프로그래머는 cpu를 어떻게 다루나?   
> cpu는 binary 원툴 (기계어) -> 어셈블리어를 짤 수도.. 하지만 어렵기 때문에   
> 프로그래밍 언어를 쓴다. 컴파일러를 통해 통역   

> ISA - CISC RISC   

> 명령어 수행   
> code 한줄마다 메모리, 레지스터들이 자꾸 변함   
> 이게 반복되어 뭔가가 이뤄지는거임

> 디테일: 명령어 수행   
> WB(write back), pre-fetch

## 정리
1. 싱글코어 -> 멀티코어 된 이유
2. cpu 생김새
3. cpu <-> 프로그래머 통신방법
4. 명령어 수행 방법
