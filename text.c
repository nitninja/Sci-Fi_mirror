#include<stdio.h>
#include<stdlib.h>


main(){
  
    int *p;
    p=(int*) calloc(3,sizeof(int));
    scanf("%d",p);
    scanf("%d",p+2);
    free(p);
    printf("%d",p);
    
}