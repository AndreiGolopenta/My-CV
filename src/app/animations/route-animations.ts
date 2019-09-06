import { 
  trigger, 
  transition, 
  style, 
  query, 
  group, 
  animate, 
  animateChild,
  state,
  keyframes
 } from '@angular/animations';


export const myAnimation = 
  trigger('routeAnimations', [
    transition('homePage => workEducation, homePage => skills, homePage => projects', mySlider('+', '-')),
    transition('homePage => contact', mySlider('-', '+')),
    transition('workEducation => homePage', mySlider('-', '+')),
    transition('workEducation => skills, workEducation => projects, workEducation => contact', mySlider('+', '-')),
    transition('skills => workEducation, skills => homePage', mySlider('-', '+')),
    transition('skills => contact, skills => projects', mySlider('+', '-')),
    transition('projects => contact', mySlider('+', '-')),
    transition('projects => homePage, projects => skills, projects => workEducation', mySlider('-', '+')),
    transition('contact => skills, contact => projects, contact => workEducation', mySlider('-', '+')),
    transition('contact => homePage', mySlider('+', '-'))
  ]);


function mySlider(initial: string, final: string) {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        width: '100%'
      })
    ], optional),
    query(':enter', [
      style({
        transform: `translateY(${initial}100%)`
      })
    ], optional),
    query(':leave', [
      style({
        transform: 'translateY(0)'
      })
    ], optional),
    group([
      query(':leave', [
        animate('500ms ease-in-out', style({
          transform: `translateY(${final}100%)`
        }))
      ], optional),
      query(':enter', [
        animate('500ms ease-in-out', style({
          transform: 'translateY(0)'
        }))
      ], optional)
    ]),
    query(':enter', animateChild()),
  ];
}


export const scale = 
  trigger('scaleCard', [
    state('start', style({
      transform: 'scale(1.1)'
    })),
    state('stop', style({
      transform: 'scale(1)'
    })),
    transition('start <=> stop', [
      animate('300ms ease-in-out')
    ]),
  ]);


export const fade =
  trigger('fadeAnimation', [
    state('start', style({
      opacity: 0.6,
      transform: 'scale(0.8)'
    })),
    state('stop', style({
      opacity: 1,
      transform: 'scale(1)'
    })),
    transition('start <=> stop', [
      animate('250ms ease-in-out')
    ]),
  ]);


export const cardTransition = 
  trigger('contactTransition', [
    state('initial', style({
      transform: 'translateX(700px)'
    })),
    state('final', style({
      transform: 'translateX(0px)'
    })),
    transition('initial => final', [
      animate('1000ms ease-in-out', keyframes([
        style({transform: 'translateX(700px)'}),
        style({transform: 'translateX(-100px)'}),
        style({transform: 'translateX(0)'})
      ]))
    ]),
  ]);

  export const fadeInOut = 
    trigger('fadeInOut', [
      state('initial', style({
        opacity: 1
      })),
      state('final', style({
        opacity: 0.7
      })),
      transition('initial <=> final', [
        animate('400ms ease-in-out')
      ])
    ]);


