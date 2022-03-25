#include<stdio.h>
#include<math.h>

float function(float x) {
float value;     value = x*x*x - x -1;     return value;
} float new_limit(float x, float y) {     float new_iter;     new_iter = 
(x+y)/2;     return new_iter;
}

int main() {     double x,
a, b;     float x1, x2;     int y1, y2;     for(int i=0;i<10;i++) {         y1 =
(int)function(i);         y2 = (int)function(i+1);         if(y1*y2<0) {
            a = (float)i;             b = (float)i+1;
printf("Value of a and b is : %f and %f\n", a, b);
            break;
        }
        else continue;
    }
    for(int j=0;j<20;j++) {         printf("The value of a and b at %d iteration : %f and %f\n", j, a, b);         x1 = (float)1000 * a;         x2 = (float)1000 * b;         x1 = trunc(x1);         x2 = trunc(x2);         if(x1==x2) {             printf("\nValue of root found at %d iteration : %.3f\n", j, x1/1000);
            break;         }         else {             float z;              z = new_limit(a, b);
if(function(z)>0) b = z;             if(function(z)<0) a = z;
        }
    }

    return 0;
}
