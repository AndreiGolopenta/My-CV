import { 
  trigger, 
  transition, 
  style, 
  query, 
  group, 
  animate, 
  animateChild,
  state
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

    

