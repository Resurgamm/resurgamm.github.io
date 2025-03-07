---
title: 「Lecture Notes」MATH 285
date: 2024-03-04 15:09:00 +0800
categories: [Lecture Notes]
tags: [Math,]     # TAG names should always be lowercase
math: true
---

## $\texttt{Introduction}$

### $\texttt{Some Definitions}$

#### $\texttt{Ordinary Differential Equation, ODE}$

An ODE of order n has the form

$$\begin{equation}\tag{*}
F(t, \mathbf{y}^{\prime}, \mathbf{y}^{\prime\prime}, \dots, \mathbf{y}^{(n)}) = 0
\end{equation}$$

where $F$ has domain $D\subseteq\mathbb{R}\times\underbrace{\mathbb{R}^m\times\mathbb{R}^m\dots\mathbb{R}^m}_{n+1}$.

A solution to $(*)$ is a function (curve) $f : I\to \mathbb{R}^m$, defined on an interval $I\subseteq \mathbb{R}$ of length $> 0$, which is $n$ times differentiable and satisfies $F(t, f^{\prime}(t), f^{\prime\prime}(t), \dots, f^{(n)}(t)) = 0$ for all $t\in I$.

> The solution of n-ordered ODE $f(t, \mathrm C_1, \mathrm C_2, \dots, \mathrm C_n)$ has $n$ arbitrary constants $\mathrm C_1, \mathrm C_2, \dots, \mathrm C_n$ that are independent of each other is called a **general solution** to $(*)$.
> And if the solution doesn't content any constants, we called it a **particular solution**.
{: .prompt-info }

#### $\texttt{Initial Value Problem, IVP}$


To solve particular problems, we usually need to have **initial conditions** to find the particular soltion for the problem. The combination of initial conditions and ODEs are called **Initial Value Problem (IVP)**. 

Suppose that an ODE as above is given and $t_0\in \mathbb{R}, \mathbf{y}_0, \dots, \mathbf{y}_n\in \mathbb{R}^m$ are such that $F(t_0, \mathbf{y}_0, \dots, \mathbf{y}_n) = 0$. A solution to the initial value problem

$$F(t, \mathbf{y}^{\prime}, \mathbf{y}^{\prime\prime}, \dots, \mathbf{y}^{(n)}) = 0,\ \mathbf{y}^{(i)}(t_0) = \mathbf{y}_i\ \ \text{for}\ 0\leqslant i\leqslant n$$

is any function (curve) $f : I \to \mathbb{R}^m$ solving $(*)$ and satisfying $f(t_0) = \mathbf{y}_0,$ $f^{\prime}(t_0) = \mathbf{y}_1, \dots,$ $f^{(n)}(t_0) = \mathbf{y}^{(n)}$.

#### $\texttt{Direction Fields (Line Element Fields)}$

Let $f : D\to \mathbb{R}, D\in \mathbb{R}^2$ be a function. 

Solving the 1st-order ODE $y^{\prime} = f(t, y)$ amounts to finding a function $y = y(t)$, defined on some interval $I\subseteq \mathbb{R}$, and such that for all $t\in I$, it should satisfy

1. $(t, y(t))\in D$
2. The slope of the graph of $y$ at the point $(t, y(t))$ equals to $f(t, y(t))$. Alternatively, the tangent direction to the graph at $(t, y(t))$ is represented by the vector $(1, f(t, y(t)))$

### $\texttt{Ten Examples}$

#### 1. $y^{\prime} = a(t)$

Assuming that $a(t)$ is continous, the general solutions is 

$$y(t) = \int a(t)\ \mathrm{d}t$$

The solution of IVP $y^{\prime} = a(t), y(t_0) = y_0$ is

$$y(t) = y_0 + \int_{t_0}^{t} a(\tau)\ \mathrm{d}\tau$$

The solution of IVP $\mathbf{y}^{\prime} = \mathbf{a}(t), \mathbf{y}(t_0) = \mathbf{y_0}$ is

$$\mathbf{y}(t) = \begin{pmatrix} 
y_{1}^{(0)} + \int_{t_0}^{t} a_1(\tau) \mathrm{d}\tau \\
\vdots \\
y_{m}^{(0)} + \int_{t_0}^{t} a_m(\tau) \mathrm{d}\tau
\end{pmatrix}$$

where $\mathbf{y}(t) = (y_1(t), \cdots, y_m(t))^{\top},\ \mathbf{a}(t) = (a_1(t), \cdots, a_m(t))^{\top}$

#### 2.
#### 3.
#### 4.
#### 5.
#### 6.
#### 7.
#### 8.
#### 9.
#### 10.

## $\texttt{First-Order Linear Equations}$

### $\texttt{Definition}$

An (explicit) first-order linear ODE has the form

$$y^{\prime} = a(t)y + b(t)$$

If $b(t) = 0$, the linear ODE is called **homogeneous**, and if $b(t) \not = 0$ for at least one $t$, it is called **inhomogeneous**.

### $\texttt{Theorem}$

#### $\texttt{Homogeneous Case}$

If $a(t)$ is continous, the general solution of $y^{\prime} = a(t)y$ is given by

$$y(t) = Ce^{\int_{t_0}^{t} a(s) \mathrm{d}s} = y(t_0)e^{\int_{t_0}^{t} a(s) \mathrm{d}s},\ C\in \mathbb{R} $$

The domain of $y(t)$ is that of $a(t)$. If the domain $T$ of $a(t)$ is not an interval, there exists a solution of the stated form on every connected component of $T$.

#### $\texttt{Inhomogeneous Case}$

**Idea**: The homogeneous ODE $y^{\prime} = a(t)y$ is solved by $y(t) = Ce^{A(t)}$. In order to solve $y^{\prime} = a(t)y + b(t)$, make $C = C(t)$ variable; that is we set $y_p(t) = C(t)e^{A(t)} = C(t)y_h(t)$, where $y_h(t)$ denotes a solution of the homogeneous ODE. Therefore

$$y_p^{\prime} = (Cy_h)^{\prime} = C^{\prime}y_h + Cy_h^{\prime} = C^{\prime}y_h + Cay_h = a(Cy_h) + b \Leftrightarrow C^{\prime} = by_h^{-1}$$

Suppose $a(t)$ and $b(t)$ are continous.

Then a particular solution of $y^{\prime} = a(t)y + b(t)$ is

$$y_p(t) = e^{A(t)}\int_{t_0}^{t}b(s)e^{-A(t)} \mathrm{d}s,\ \text{where}\ A(t) = \int_{t_0}^{t}a(s) \mathrm{d}s$$

And the generous solution of $y^{\prime} = a(t)y + b(t)$ is

$$y(t) = Ce^{A(t)} + y_p(t) = y(t_0)e^{A(t)} + y_p(t),\ C\in \mathbb{R}$$

### $\texttt{Integrating Factors}$

There is an alternative way to solve $y^{\prime} = a(t)y + b(t)$ using a so-called **integrating factor**. We can rewrite the ODE as

$$y^{\prime}(t) - a(t)y(t) = b(t)$$

This equation can be multiplied by any function $m(t)$ with domain $I$ to yield the equivalent form

$$\begin{equation}\tag{*}
m(t)y^{\prime}(t) - m(t)a(t)y(t) = m(t)b(t)
\end{equation}$$

provided by $m(t)\not = 0$ for all $t\in I$.

The goal is to choose a proper $m(t)$ such that the left-hand side can be integrated to yield $m(t)y(t)$ 

We choose $m(t) = e^{-A(t)}, A(t) = \int a(s) \mathrm{d}s$. In this way, we can get

$$\frac{\mathrm{d}}{\mathrm{d}t}(m(t)y(t)) = m(t)y^{\prime}(t) + m^{\prime}(t)y(t) = m(t)y^{\prime}(t) - m(t)a(t)y(t)$$

which is the left-hand side of $(*)$.

Integrate both the left-hand and right-hand side of $(*)$, we can get

$$m(t)y(t) = \int m(t)b(t) \Rightarrow y(t) = e^{A(t)}\int e^{-A(t)}b(t) \mathrm{d}t$$